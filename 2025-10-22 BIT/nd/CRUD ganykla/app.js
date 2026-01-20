// let ganykla;

// ganykla = localStorage.getItem('mano_ganykla');
// if (ganykla === null) {
//     ganykla = [];
// } else {
//     ganykla = JSON.parse(ganykla);
// }


// // Mano mygtukai
// const avis = document.querySelector('.avis');
// avis.addEventListener('click', _ => {
//     ganykla.push('avis');
//     localStorage.setItem('mano_ganykla', JSON.stringify(ganykla));
//     zalia_Ganykla();
// });

// const antis = document.querySelector('.antis');
// antis.addEventListener('click', _ => {
//     ganykla.push('antis');
//     localStorage.setItem('mano_ganykla', JSON.stringify(ganykla));
//     zalia_Ganykla();
// });

// const antilopes = document.querySelector('.antilope');
// antilopes.addEventListener('click', _ => {
//     ganykla.push('antilope');
//     localStorage.setItem('mano_ganykla', JSON.stringify(ganykla));
//     zalia_Ganykla();
// });

// const clearBtn = document.querySelector('.clear');
// clearBtn.addEventListener('click', () => {
//     ganykla = [];
//     localStorage.removeItem('mano_ganykla');
//     zalia_Ganykla();
// });

// const zaliaGanykla = document.querySelector('.zaliaGanykla');

// function zalia_Ganykla() {
//     zaliaGanykla.innerHTML = '';
//     ganykla.forEach(ganykla => {
//         const blokas = document.createElement('div');
//         blokas.classList.add('tekstas');
//         blokas.innerText = ganykla;
//         zaliaGanykla.appendChild(blokas);
//     });
// }

// zalia_Ganykla(); 



console.log('Mini CRUD - Ganykla');

let LIST;
const KEY = 'mano_ganykla';

// INIT
const init = _ => {
    readLocalStorage();
    render();

    const weightInput = document.querySelector('.weight');

    document.querySelector('.avis').addEventListener('click', _ => {
        Store('avis', Number(weightInput.value));
    });

    document.querySelector('.antis').addEventListener('click', _ => {
        Store('antis', Number(weightInput.value));
    });

    document.querySelector('.antilope').addEventListener('click', _ => {
        Store('antilope', Number(weightInput.value));
    });

    document.querySelector('.clear').addEventListener('click', _ => {
        LIST = [];
        localStorage.removeItem(KEY);
        render();
    });
};

// STORAGE
const readLocalStorage = _ => {
    const data = localStorage.getItem(KEY);
    LIST = data ? JSON.parse(data) : [];
};

const writeLocalStorage = _ => {
    localStorage.setItem(KEY, JSON.stringify(LIST));
};

// CREATE
const Store = (type, weight) => {
    if (!weight || weight <= 0) return; // basic validation

    const item = {
        id: Date.now(),
        type,
        weight
    };

    LIST.unshift(item);
    writeLocalStorage();
    render();
};

// DELETE
const Destroy = id => {
    LIST = LIST.filter(item => item.id !== id);
    writeLocalStorage();
    render();
};

// UPDATE
const Update = (id, newWeight) => {
    if (!newWeight || newWeight <= 0) return;

    LIST = LIST.map(item =>
        item.id === id ? { ...item, weight: newWeight } : item
    );

    writeLocalStorage();
    render();
};

// READ / RENDER
const render = _ => {
    const box = document.querySelector('.zaliaGanykla');
    box.innerHTML = '';

    LIST.forEach(item => {
        const row = document.createElement('div');
        row.classList.add('tekstas');

        const label = document.createElement('span');
        label.innerText = item.type;
        row.appendChild(label);

        const editInput = document.createElement('input');
        editInput.type = 'number';
        editInput.value = item.weight;
        row.appendChild(editInput);

        const saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        saveBtn.addEventListener('click', _ => {
            Update(item.id, Number(editInput.value));
        });
        row.appendChild(saveBtn);

        const delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.addEventListener('click', _ => {
            Destroy(item.id);
        });
        row.appendChild(delBtn);

        box.appendChild(row);
    });
};

init();
