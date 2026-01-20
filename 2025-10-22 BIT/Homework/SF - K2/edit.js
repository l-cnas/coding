const k3_KEY = "k3_invList";

let data; // cia bus invoice (tas pats kaip app.js)

// pasiimu ls. jei tuscia - []
function loadLs() {
  const raw = localStorage.getItem(k3_KEY);
  return raw ? JSON.parse(raw) : [];
}

// saugau atgal i ls
function saveLs(listas) {
  localStorage.setItem(k3_KEY, JSON.stringify(listas));
}

// id is url ?id=...
function getId() {
  return new URLSearchParams(window.location.search).get("id");
}

// susirandu savo irasa pagal id
function findRow(listas, id) {
  const idx = listas.findIndex((x) => String(x.id) === String(id));
  return { idx, row: idx >= 0 ? listas[idx] : null };
}

/* =========================
   TOP (copy tavo logikos)
   ========================= */
function topData() {
  const pvmNrSk = data.number;
  const pvmDate = data.date;
  const pvmDueDate = data.due_date;

  const topFaktura = document.querySelector("#saskaitaNr");
  const pardavejas = document.querySelector("#pardavejas");
  const pirkejas = document.querySelector("#pirkejas");

  // isvalom, kad neprisideziotu vel ir vel
  topFaktura.innerHTML = "<h1>PVM Saskaita Faktura</h1>";
  pardavejas.innerHTML = "<h3>Pardavejas</h3>";
  pirkejas.innerHTML = "<h3>Pirkejas</h3>";

  const pvmNr = document.createElement("p");
  pvmNr.innerText = `Numeris: ${pvmNrSk}`;
  topFaktura.appendChild(pvmNr);

  const date = document.createElement("p");
  date.innerText = `Israsyta: ${pvmDate}`;
  topFaktura.appendChild(date);

  const due = document.createElement("p");
  due.innerText = `Apmokėti iki: ${pvmDueDate}`;
  topFaktura.appendChild(due);

  for (const value of Object.values(data.company.buyer)) {
    const p = document.createElement("p");
    p.innerText = value;
    pirkejas.appendChild(p);
  }

  for (const value of Object.values(data.company.seller)) {
    const p = document.createElement("p");
    p.innerText = value;
    pardavejas.appendChild(p);
  }
}

/* =========================
   TABLE (edit mode)
   - Kiekis: input
   - Nuolaida: select + input
   - Suma: live
   ========================= */
function tableDataEdit() {
  const tbody = document.querySelector("#itemsTable tbody");
  tbody.innerHTML = "";

  data.items.forEach((item, i) => {
    const tr = document.createElement("tr");

    // Nr
    const tdNr = document.createElement("td");
    tdNr.innerText = i + 1;

    // Pavadinimas
    const tdName = document.createElement("td");
    tdName.innerText = item.description;

    // Kiekis (input)
    const tdQty = document.createElement("td");
    const inQty = document.createElement("input");
    inQty.type = "number";
    inQty.min = "0";
    inQty.step = "1";
    inQty.value = item.quantity;
    inQty.dataset.i = i;
    inQty.className = "inQty";
    tdQty.appendChild(inQty);

    // Kaina
    const tdPrice = document.createElement("td");
    tdPrice.textContent = Number(item.price).toFixed(2);

    // Nuolaida (select + input)
    const tdDiscount = document.createElement("td");

    const selType = document.createElement("select");
    selType.className = "inDiscType";
    selType.dataset.i = i;

    selType.innerHTML = `
      <option value="none">-</option>
      <option value="percentage">%</option>
      <option value="fixed">€</option>
    `;

    const inVal = document.createElement("input");
    inVal.type = "number";
    inVal.min = "0";
    inVal.step = "0.01";
    inVal.className = "inDiscVal";
    inVal.dataset.i = i;

    // uzdedam dabartine nuolaida i UI
    if (Array.isArray(item.discount)) {
      selType.value = "none";
      inVal.value = 0;
      inVal.disabled = true;
      item.discount = { type: "none", value: 0 }; // kad butu vienoda struktura
    } else {
      const t = item.discount?.type || "none";
      const v = Number(item.discount?.value || 0);

      selType.value = t;
      inVal.value = v;

      if (t === "none") inVal.disabled = true;
    }

    tdDiscount.appendChild(selType);
    tdDiscount.appendChild(inVal);

    // Suma (cell)
    const tdSum = document.createElement("td");
    tdSum.className = "lineSum";
    tdSum.dataset.i = i;

    tr.appendChild(tdNr);
    tr.appendChild(tdName);
    tr.appendChild(tdQty);
    tr.appendChild(tdPrice);
    tr.appendChild(tdDiscount);
    tr.appendChild(tdSum);

    tbody.appendChild(tr);
  });

  // pirma karta suskaiciuojam sumas
  refreshSums();
}

/* =========================
   BOTTOM totals (copy + return bendra)
   ========================= */
function bottomData() {
  const items = data.items;
  const siuntimas = data.shippingPrice || 0;
  const pvmPrc = 0.21;

  let itemsTotal = 0;

  items.forEach((item) => {
    const base = item.quantity * item.price;

    let discountValue = 0;
    const d = item.discount;

    if (d && typeof d === "object") {
      if (d.type === "percentage") discountValue = base * (d.value / 100);
      if (d.type === "fixed") discountValue = d.value;
      if (d.type === "none") discountValue = 0;
    }

    discountValue = Math.min(discountValue, base);
    const final = base - discountValue;

    itemsTotal += final;
  });

  const viso = itemsTotal + siuntimas;
  const pvm = viso * pvmPrc;
  const bendra = viso + pvm;

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
  addRow("Pristatymas:", siuntimas);
  addRow("PVM (21%):", pvm);
  addRow("Viso su PVM:", bendra);

  return { bendra };
}

/* =========================
   SUMA ŽODŽIAIS (copy tavo)
   ========================= */
const ones = [
  "nulis","vienas","du","trys","keturi",
  "penki","šeši","septyni","aštuoni","devyni",
  "dešimt","vienuolika","dvylika","trylika",
  "keturiolika","penkiolika","šešiolika",
  "septyniolika","aštuoniolika","devyniolika"
];

const tens = [
  "","", "dvidešimt","trisdešimt","keturiasdešimt",
  "penkiasdešimt","šešiasdešimt","septyniasdešimt",
  "aštuoniasdešimt","devyniasdešimt"
];

const hundreds = [
  "","šimtas","du šimtai","trys šimtai",
  "keturi šimtai","penki šimtai","šeši šimtai",
  "septyni šimtai","aštuoni šimtai","devyni šimtai"
];

function under100(n) {
  if (n < 20) return ones[n];
  const t = Math.floor(n / 10);
  const o = n % 10;
  return o === 0 ? tens[t] : `${tens[t]} ${ones[o]}`;
}

function under1000(n) {
  if (n < 100) return under100(n);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  return rest === 0 ? hundreds[h] : `${hundreds[h]} ${under100(rest)}`;
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

/* =========================
   EDIT logic:
   - update data from inputs
   - recalc line sums + totals + suma zodziais
   ========================= */
function updateItemFromInputs(i) {
  const item = data.items[i];

  const qtyEl = document.querySelector(`.inQty[data-i="${i}"]`);
  const typeEl = document.querySelector(`.inDiscType[data-i="${i}"]`);
  const valEl = document.querySelector(`.inDiscVal[data-i="${i}"]`);

  // kiekis
  const q = qtyEl ? Number(qtyEl.value || 0) : Number(item.quantity || 0);
  item.quantity = Number.isFinite(q) ? q : 0;

  // nuolaida type + value
  const t = typeEl ? typeEl.value : "none";
  const v = valEl ? Number(valEl.value || 0) : 0;

  if (t === "none") {
    item.discount = { type: "none", value: 0 };
    if (valEl) {
      valEl.value = 0;
      valEl.disabled = true;
    }
  } else {
    item.discount = { type: t, value: Number.isFinite(v) ? v : 0 };
    if (valEl) valEl.disabled = false;
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

function refreshSums() {
  // susinchronizuojam data pagal UI
  data.items.forEach((_, i) => updateItemFromInputs(i));

  // atnaujinam eiluciu sumas
  data.items.forEach((item, i) => {
    const cell = document.querySelector(`.lineSum[data-i="${i}"]`);
    if (cell) cell.innerText = lineSum(item).toFixed(2);
  });

  // atnaujinam totals + suma zodziais
  const totals = bottomData();
  document.querySelector("#sumaZodziaisText").innerText = sumaZodziais(totals.bendra);
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getId();
  const list = loadLs();
  const found = findRow(list, id);

  if (!id || !found.row) {
    // jei nera id arba neradom ls'e - metames atgal i lista
    window.location.href = "list.html";
    return;
  }

  // cia musu invoice
  data = found.row.data;

  // renderinam kaip index'e, tik su edit table
  topData();
  tableDataEdit();
  refreshSums();

  // bet koks input/change - perskaiciuojam
  document.querySelector("#itemsTable").addEventListener("input", () => {
    refreshSums();
  });

  document.querySelector("#itemsTable").addEventListener("change", () => {
    refreshSums();
  });

  // issaugom i ls
  document.querySelector("#btnSaveEdit").addEventListener("click", () => {
    // paskutinis sync
    refreshSums();

    found.row.data = data;
    list[found.idx] = found.row;
    saveLs(list);

    window.location.href = "list.html";
  });

  document.querySelector("#btnList").addEventListener("click", () => {
    window.location.href = "list.html";
  });

  document.querySelector("#btnPrint").addEventListener("click", () => window.print());
});
