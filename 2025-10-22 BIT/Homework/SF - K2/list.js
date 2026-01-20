const k3_KEY = "k3_invList";

// pasiimu ls. jei tuscia - darom []
function loadLs() {
    const raw = localStorage.getItem(k3_KEY);
    return raw ? JSON.parse(raw) : [];
}

// isaugau i ls
function saveLs(listas) {
    localStorage.setItem(k3_KEY, JSON.stringify(listas));
}

// greit pasiskaiciuoju viso su PVM (nes ls neturi galutines sumos)
function visoSuPvm(inv) {
    const PVM = 0.21;
    const items = inv?.items || [];
    const ship = Number(inv?.shippingPrice || 0);

    let suma = 0;

    items.forEach((it) => {
        const q = Number(it.quantity || 0);
        const p = Number(it.price || 0);
        const baze = q * p;

        let nuolaida = 0;
        const d = it.discount;

        if (d && typeof d === "object") {
            if (d.type === "percentage") nuolaida = baze * (Number(d.value || 0) / 100);
            if (d.type === "fixed") nuolaida = Number(d.value || 0);
        }

        // nedarom nesamoniu i minusa
        nuolaida = Math.min(nuolaida, baze);

        suma += baze - nuolaida;
    });

    const bePvm = suma + ship;
    return bePvm + bePvm * PVM;
}

function eur(x) {
    return `${Number(x).toFixed(2)} €`;
}

// piešiam lentele
function render() {
    const tbody = document.querySelector("#invoiceTbody");
    const empty = document.querySelector("#emptyText");

    const list = loadLs();
    tbody.innerHTML = "";

    if (list.length === 0) {
        empty.style.display = "block";
        return;
    }
    empty.style.display = "none";

    list.forEach((row, i) => {
        const inv = row.data || {};
        const total = visoSuPvm(inv);

        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${inv.number ?? ""}</td>
      <td>${inv.date ?? ""}</td>
      <td>${eur(total)}</td>
      <td class="no-print">
        <button type="button" class="btnView" data-id="${row.id}">Žiūrėti</button>
        <button type="button" class="btnEdit" data-id="${row.id}">Redaguoti</button>
        <button type="button" class="btnDelete" data-id="${row.id}">Trinti</button>
      </td>
    `;
        tbody.appendChild(tr);
    });
}

// trinu pagal id
function trinti(id) {
    const list = loadLs();
    const next = list.filter((x) => String(x.id) !== String(id));
    saveLs(next);
    render();
}

document.addEventListener("DOMContentLoaded", () => {
    render();

    // nauja - atgal i api puslapi (index)
    document.querySelector("#btnNewInvoice").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // nuvalau viska (be klausimu)
    document.querySelector("#btnClearAll").addEventListener("click", () => {
        localStorage.removeItem(k3_KEY);
        render();
    });

    // 1 listeneris visai lentelei
    document.querySelector("#invoiceTbody").addEventListener("click", (e) => {
        const el = e.target;
        if (!(el instanceof HTMLElement)) return;

        const id = el.getAttribute("data-id");
        if (!id) return;

        if (el.classList.contains("btnView")) {
            window.location.href = `view.html?id=${encodeURIComponent(id)}`;
            return;
        }

        if (el.classList.contains("btnEdit")) {
            window.location.href = `edit.html?id=${encodeURIComponent(id)}`;
            return;
        }

        if (el.classList.contains("btnDelete")) {
            trinti(id);
            return;
        }
    });
});
