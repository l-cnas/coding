const k3_KEY = "k3_invList";

let data; // cia bus invoice is ls

function loadLs() {
    const raw = localStorage.getItem(k3_KEY);
    return raw ? JSON.parse(raw) : [];
}

function getId() {
    return new URLSearchParams(window.location.search).get("id");
}

function findRow(listas, id) {
    const idx = listas.findIndex((x) => String(x.id) === String(id));
    return { idx, row: idx >= 0 ? listas[idx] : null };
}

function topData() {
    const topFaktura = document.querySelector("#saskaitaNr");
    const pardavejas = document.querySelector("#pardavejas");
    const pirkejas = document.querySelector("#pirkejas");

    topFaktura.innerHTML = "<h1>PVM Saskaita Faktura</h1>";
    pardavejas.innerHTML = "<h3>Pardavejas</h3>";
    pirkejas.innerHTML = "<h3>Pirkejas</h3>";

    const p1 = document.createElement("p");
    p1.innerText = `Numeris: ${data.number}`;
    topFaktura.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = `Israsyta: ${data.date}`;
    topFaktura.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = `Apmokėti iki: ${data.due_date}`;
    topFaktura.appendChild(p3);

    for (const v of Object.values(data.company?.seller || {})) {
        const p = document.createElement("p");
        p.innerText = v;
        pardavejas.appendChild(p);
    }

    for (const v of Object.values(data.company?.buyer || {})) {
        const p = document.createElement("p");
        p.innerText = v;
        pirkejas.appendChild(p);
    }
}

function lineSum(item) {
    const base = Number(item.quantity || 0) * Number(item.price || 0);

    let discountValue = 0;
    const d = item.discount;

    if (d && typeof d === "object") {
        if (d.type === "percentage") discountValue = base * (Number(d.value || 0) / 100);
        if (d.type === "fixed") discountValue = Number(d.value || 0);
        if (d.type === "none") discountValue = 0;
    }

    discountValue = Math.min(discountValue, base);
    return base - discountValue;
}

function tableData() {
    const tbody = document.querySelector("#itemsTable tbody");
    tbody.innerHTML = "";

    data.items.forEach((item, i) => {
        const tr = document.createElement("tr");

        const tdNr = document.createElement("td");
        tdNr.innerText = i + 1;

        const tdName = document.createElement("td");
        tdName.innerText = item.description ?? "";

        const tdQty = document.createElement("td");
        tdQty.innerText = item.quantity;

        const tdPrice = document.createElement("td");
        tdPrice.innerText = Number(item.price).toFixed(2);

        const tdDisc = document.createElement("td");
        if (!item.discount || Array.isArray(item.discount) || item.discount.type === "none") {
            tdDisc.innerText = "-";
        } else if (item.discount.type === "percentage") {
            tdDisc.innerText = `${item.discount.value}%`;
        } else if (item.discount.type === "fixed") {
            tdDisc.innerText = `${Number(item.discount.value).toFixed(2)} €`;
        } else {
            tdDisc.innerText = "-";
        }

        const tdSum = document.createElement("td");
        tdSum.innerText = lineSum(item).toFixed(2);

        tr.append(tdNr, tdName, tdQty, tdPrice, tdDisc, tdSum);
        tbody.appendChild(tr);
    });
}

function bottomData() {
    const items = data.items;
    const ship = Number(data.shippingPrice || 0);
    const PVM = 0.21;

    let itemsTotal = 0;
    items.forEach((it) => (itemsTotal += lineSum(it)));

    const bePvm = itemsTotal + ship;
    const pvmSuma = bePvm * PVM;
    const bendra = bePvm + pvmSuma;

    const tfoot = document.querySelector("#itemsTable tfoot");
    tfoot.innerHTML = "";

    function addRow(label, value) {
        const tr = document.createElement("tr");
        const tdSpacer = document.createElement("td");
        tdSpacer.colSpan = 4;

        const tdLabel = document.createElement("td");
        tdLabel.textContent = label;

        const tdValue = document.createElement("td");
        tdValue.textContent = value.toFixed(2);

        tr.append(tdSpacer, tdLabel, tdValue);
        tfoot.appendChild(tr);
    }

    addRow("Viso:", itemsTotal);
    addRow("Pristatymas:", ship);
    addRow("PVM (21%):", pvmSuma);
    addRow("Viso su PVM:", bendra);

    return bendra;
}

// suma zodziais
const ones = ["nulis", "vienas", "du", "trys", "keturi", "penki", "šeši", "septyni", "aštuoni", "devyni", "dešimt", "vienuolika", "dvylika", "trylika", "keturiolika", "penkiolika", "šešiolika", "septyniolika", "aštuoniolika", "devyniolika"];
const tens = ["", "", "dvidešimt", "trisdešimt", "keturiasdešimt", "penkiasdešimt", "šešiasdešimt", "septyniasdešimt", "aštuoniasdešimt", "devyniasdešimt"];
const hundreds = ["", "šimtas", "du šimtai", "trys šimtai", "keturi šimtai", "penki šimtai", "šeši šimtai", "septyni šimtai", "aštuoni šimtai", "devyni šimtai"];

function under100(n) {
    if (n < 20) return ones[n];
    const t = Math.floor(n / 10);
    const o = n % 10;
    return o === 0 ? tens[t] : `${tens[t]} ${ones[o]}`;
}
function under1000(n) {
    if (n < 100) return under100(n);
    const h = Math.floor(n / 100);
    const r = n % 100;
    return r === 0 ? hundreds[h] : `${hundreds[h]} ${under100(r)}`;
}
function numberToWordsLt(n) {
    if (n === 0) return ones[0];
    if (n < 1000) return under1000(n);

    const tuks = Math.floor(n / 1000);
    const rest = n % 1000;

    let tWord;
    if (tuks === 1) tWord = "tūkstantis";
    else if (tuks < 10) tWord = `${ones[tuks]} tūkstančiai`;
    else tWord = `${under1000(tuks)} tūkstančių`;

    return rest === 0 ? tWord : `${tWord} ${under1000(rest)}`;
}
function sumaZodziais(bendra) {
    const litai = Math.floor(bendra);
    const centai = Math.round((bendra - litai) * 100);
    const text = `${numberToWordsLt(litai)} Lt ${String(centai).padStart(2, "0")} ct`;
    return text.charAt(0).toUpperCase() + text.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    const id = getId();
    const list = loadLs();
    const found = findRow(list, id);

    if (!id || !found.row) {
        window.location.href = "list.html";
        return;
    }

    data = found.row.data;

    topData();
    tableData();
    const total = bottomData();

    document.querySelector("#sumaZodziaisText").innerText = sumaZodziais(total);

    document.querySelector("#btnEdit").addEventListener("click", () => {
        window.location.href = `edit.html?id=${encodeURIComponent(id)}`;
    });

    document.querySelector("#btnList").addEventListener("click", () => {
        window.location.href = "list.html";
    });

    document.querySelector("#btnPrint").addEventListener("click", () => window.print());
});
