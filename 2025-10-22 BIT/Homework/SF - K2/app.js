

let data; // Tuscias variable, kur sukisim viska gauta is API
const k3_KEY = "k3_invList";

// Prasitestinam, kisam viska i funkcija. 
// Fakturos virsus

function topData() {
    //Testukas
    // console.log('test loadinam', data.company.buyer.name);

    // kintamuju sekcija.

    const pvmNrSk = data.number;       // Musu fakturos numeriukas
    const pvmDate = data.date;         // fakturos israsymo data
    const pvmDueDate = data.due_date;  // iki kada susimoket

    // Top sekcija.
    const topFaktura = document.querySelector('#saskaitaNr');
    const pardavejas = document.querySelector('#pardavejas');
    const pirkejas = document.querySelector('#pirkejas');

    //Numeris
    const pvmNr = document.createElement('p');
    pvmNr.innerText = `Numeris: ${pvmNrSk}`;
    topFaktura.appendChild(pvmNr);

    // Israsymo data
    const date = document.createElement('p');
    date.innerText = `Israsyta: ${pvmDate}`;
    topFaktura.appendChild(date);

    // Apmokėti iki (mokėjimo terminas)
    const due = document.createElement('p');
    due.innerText = `Apmokėti iki: ${pvmDueDate}`;
    topFaktura.appendChild(due);


    // Pirkejas naudojant object.values, ima tik reiksmes.
    for (const value of Object.values(data.company.buyer)) {
        const p = document.createElement('p');
        p.innerText = value;
        pirkejas.appendChild(p);
    }

    //tas pats pardavejui
    for (const value of Object.values(data.company.seller)) {
        const p = document.createElement('p');
        p.innerText = value;
        pardavejas.appendChild(p);
    }

};

// Na ka, einam prie vidurio. 

function tableData() {
    //Susirandam savo duomenis+lentele
    const lentele = document.querySelector('#itemsTable tbody');
    const items = data.items;

    //forEach testuojam ar viska randam
    items.forEach((item, i) => {
        // Surandam numeri +1 nes nuo nuliuko skaiciuoja. 
        const nr = i + 1;
        //Testinam, ka loadina
        // console.log(nr, item.description, item.quantity, item.price, item.discount);

        //pradedam kurti lentele cia. 
        const tr = document.createElement('tr');
        const tdNr = document.createElement('td');
        const tdName = document.createElement('td');
        const tdQty = document.createElement('td');
        const tdPrice = document.createElement('td');
        //cia kas eis i musu lentele
        tdNr.innerText = i + 1;
        tdName.innerText = item.description;
        tdQty.textContent = item.quantity;
        tdPrice.textContent = item.price.toFixed(2);
        //o cia jau dedam, dedas po viena is eiles, kurs eilute, kiekvienam loopas kurs po nauja eilute.
        tr.appendChild(tdNr);
        tr.appendChild(tdName);
        tr.appendChild(tdQty);
        tr.appendChild(tdPrice);

        //Judam, prie matematikos - nuolaida ir suma. 
        const tdDiscount = document.createElement('td');

        //Cis surandam ar turim nuolaida, jei jos neturim, rasom - minusiuka, kad nera. 
        if (Array.isArray(item.discount)) {
            tdDiscount.innerText = '-';
        } else {
            tdDiscount.innerText =
                item.discount.type === 'percentage'
                    ? `- ${item.discount.value}%`
                    : `- ${Number(item.discount.value).toFixed(2)}`;
        }

        //Appendinam(dedam i lenteles gala), cia savo nuolaida. 
        tr.appendChild(tdDiscount);

        // Vaziuojam dzesika toliau! Desim suma dabar. 
        const tdSum = document.createElement('td');

        // skaiciuojam suma
        const baseSum = item.quantity * item.price;

        // Dabar perskaiciuojam su savo nuolaida.
        let discountValue = 0;

        if (!Array.isArray(item.discount)) {
            if (item.discount.type === 'percentage') {
                discountValue = baseSum * (item.discount.value / 100);
            }

            if (item.discount.type === 'fixed') {
                discountValue = item.discount.value;
            }
        }

        // cia eilute, katra turetu neleist negatyviu sumu.
        discountValue = Math.min(discountValue, baseSum);

        const finalSum = baseSum - discountValue;
        tdSum.innerText = finalSum.toFixed(2);

        // appendinam
        tr.appendChild(tdSum);

        lentele.appendChild(tr);
    });

}

// Apatine lenteles dalis, ir visa kita.
function bottomData() {
    const items = data.items;
    //Siuntimo kaina, jei nera - tai 0
    const siuntimas = data.shippingPrice || 0;
    // PVM 21%
    const pvmPrc = 0.21;

    let itemsTotal = 0;

    items.forEach(item => {
        const base = item.quantity * item.price;

        let discountValue = 0;
        const d = item.discount;

        if (!Array.isArray(d)) {
            if (d.type === 'percentage') discountValue = base * (d.value / 100);
            if (d.type === 'fixed') discountValue = d.value;
        }

        discountValue = Math.min(discountValue, base);
        const final = base - discountValue;

        itemsTotal += final;
    });

    const viso = itemsTotal + siuntimas;     // kaina + siuntimas
    const pvm = viso * pvmPrc;             // pvm 21%
    const bendra = viso + pvm;               // viso su pvm

    // Checkinam viska iki sios vietos
    // console.log({ itemsTotal, siuntimas, viso, pvm, bendra });

    const tfoot = document.querySelector('#itemsTable tfoot');
    tfoot.innerHTML = '';

    function addRow(label, value) {
        const tfoot = document.querySelector('#itemsTable tfoot');
        const tr = document.createElement('tr');

        const tdSpacer = document.createElement('td');
        tdSpacer.colSpan = 4;

        const tdLabel = document.createElement('td');
        tdLabel.textContent = label;

        const tdValue = document.createElement('td');
        tdValue.textContent = value.toFixed(2);

        tr.append(tdSpacer, tdLabel, tdValue);
        tfoot.appendChild(tr);
    }

    addRow('Viso:', itemsTotal);
    addRow('Pristatymas:', siuntimas);
    addRow('PVM (21%):', pvm);
    addRow('Viso su PVM:', bendra);

    return { bendra };
}


// Stipriai su skardine galva sita aiskinaus, kaip ir suprantu, nors vos vos, kai jau bandau pats isgamint tai svilpia vejai.. 
// ===============================
// SUMA ŽODŽIAIS (LT, invoices)
// ===============================

// Žodynai skaičių pavertimui į žodžius
const ones = [
    'nulis', 'vienas', 'du', 'trys', 'keturi',
    'penki', 'šeši', 'septyni', 'aštuoni', 'devyni',
    'dešimt', 'vienuolika', 'dvylika', 'trylika',
    'keturiolika', 'penkiolika', 'šešiolika',
    'septyniolika', 'aštuoniolika', 'devyniolika'
];

const tens = [
    '', '', 'dvidešimt', 'trisdešimt', 'keturiasdešimt',
    'penkiasdešimt', 'šešiasdešimt', 'septyniasdešimt',
    'aštuoniasdešimt', 'devyniasdešimt'
];

const hundreds = [
    '', 'šimtas', 'du šimtai', 'trys šimtai',
    'keturi šimtai', 'penki šimtai', 'šeši šimtai',
    'septyni šimtai', 'aštuoni šimtai', 'devyni šimtai'
];

// 0–99 pavertimas į žodžius
function under100(n) {
    // jei mažiau nei 20 – imam tiesiai iš masyvo
    if (n < 20) return ones[n];

    // kitaip – dešimtys + vienetai
    const t = Math.floor(n / 10);
    const o = n % 10;

    return o === 0 ? tens[t] : `${tens[t]} ${ones[o]}`;
}

// 0–999 pavertimas į žodžius
function under1000(n) {
    // jei mažiau nei 100 – deleguojam į under100
    if (n < 100) return under100(n);

    const h = Math.floor(n / 100);
    const rest = n % 100;

    // jei likučio nėra – tik šimtai
    return rest === 0
        ? hundreds[h]
        : `${hundreds[h]} ${under100(rest)}`;
}

// 0–999999 pavertimas į žodžius (užtenka sąskaitoms)
function numberToWordsLt(n) {
    if (n === 0) return ones[0];

    // jei iki 1000 – tiesiai
    if (n < 1000) return under1000(n);

    // tūkstančiai
    const thousands = Math.floor(n / 1000);
    const rest = n % 1000;

    let thousandWord;

    if (thousands === 1) {
        thousandWord = 'tūkstantis';
    } else if (thousands < 10) {
        thousandWord = `${ones[thousands]} tūkstančiai`;
    } else {
        thousandWord = `${under1000(thousands)} tūkstančių`;
    }

    return rest === 0
        ? thousandWord
        : `${thousandWord} ${under1000(rest)}`;
}

// Galutinė funkcija sąskaitai
// bendra = Viso su PVM (number)
function sumaZodziais(bendra) {
    // atskiriam litus ir centus
    const litai = Math.floor(bendra);
    const centai = Math.round((bendra - litai) * 100);

    // suformuojam tekstą kaip sąskaitoje
    const text = `${numberToWordsLt(litai)} Lt ${String(centai).padStart(2, '0')} ct`;
    return text.charAt(0).toUpperCase() + text.slice(1);

}

// K3 dalis - sukurt save/edit/perziura.

//Mygtukai
document.querySelector("#btnSave").addEventListener("click", saveCurrentInvoice);
document.querySelector("#btnRefresh").addEventListener("click", () => {
    location.reload();
});
document.querySelector("#btnPrint").addEventListener("click", () => window.print());
document.querySelector("#btnList").addEventListener("click", () => {
  window.location.href = "list.html";
});



// Save funkcija, su id, etc. 
function saveCurrentInvoice() {
    // Jei dar nera data (invoice is API), tai nieko nedarom
    if (!data) return;

    // kuriam id.
    const invId = Date.now();

    // sudedam viska i viena, kad sudet i local storage.
    const pack = {
        id: invId,
        savedAt: Date.now(),
        data: data
    };

    //Cia paimu savo invoice is ls, jei jie yra. Jei tuscia kuriu nauja array.
    let invList = JSON.parse(localStorage.getItem(k3_KEY));

    if (invList === null) {
        invList = [];
    }

    //Pridedu dabartini invoice prie listo ls.
    invList.push(pack);

    //sudedam viska atgal i ls
    localStorage.setItem(k3_KEY, JSON.stringify(invList));
}





// Fetchas - le loadinimas API

fetch('https://in3.dev/inv/')
    .then(res => res.json())
    .then(stuff => {
        // Ziurim, kad viska keltu man. 
        // console.log(stuff);
        data = stuff;
        topData();
        tableData();

        const totals = bottomData(); // čia jau turi būti paskaičiuota
        document.querySelector('#sumaZodziaisText').innerText =
            sumaZodziais(totals.bendra);
    });
