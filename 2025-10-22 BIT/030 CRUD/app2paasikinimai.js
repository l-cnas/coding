console.log('CRUD'); // Prints "CRUD" in console so you know the script loaded

/*
Naujo pridėjimas // Comment block: explanation of CRUD flow
Create - vaizdas // "Create" = UI part (form/inputs)
Store - veiksmas  // "Store" = action that saves the new item
*/

let LIST; // Will hold the array of color objects in memory (your main list)
const KEY = 'myFancyColorsList'; // The localStorage key name where the list is stored

const init = _ => { // Main startup function (runs once at the end)
    readLocalStorage(); // Load LIST from localStorage (or create empty array)
    render(); // Draw current LIST items into the page

    const createInput = document.querySelector('[data-create-color-input]'); // Find input for new color
    const createButton = document.querySelector('[data-create-color-button]'); // Find button for adding new color

    createButton.addEventListener('click', _ => { // When user clicks "create" button...
        const color = createInput.value; // Read the text/value typed into the input
        Store(color); // Save this color into LIST + localStorage + re-render
    });
}

const readLocalStorage = _ => { // Reads saved list from localStorage into LIST
    let data = localStorage.getItem(KEY); // Get saved string from localStorage (or null if not found)
    if (null === data) { // If nothing was saved yet...
        LIST = []; // Start with empty array
    } else { // If something exists in localStorage...
        LIST = JSON.parse(data); // Convert JSON string back into JS array of objects
    }
}

const writeLocalStorage = _ => { // Writes current LIST into localStorage
    let data = JSON.stringify(LIST); // Convert LIST array into JSON string
    localStorage.setItem(KEY, data); // Save JSON string under KEY
}

const rand = (min, max) => { // Utility: random integer between min and max inclusive
    const minCeiled = Math.ceil(min); // Round min up (in case min is not integer)
    const maxFloored = Math.floor(max); // Round max down (in case max is not integer)
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // Random int in range
}

const render = _ => { // Renders LIST to the DOM (draws your list of rows)
    const listBin = document.querySelector('[data-colors-list]'); // Container where rows will be added
    const listRowTemplate = document.querySelector('[data-list-template]'); // <template> element for one row

    listBin.innerHTML = ''; // Clear container so we can rebuild fresh from LIST

    LIST.forEach(colorItem => { // Loop through each saved object {id, color}
        const rowHtml = listRowTemplate.content.cloneNode(true); // Clone template content into real DOM nodes
        const colorSq = rowHtml.querySelector('[data-color-sq]'); // Find the colored square inside this row

        //**** DELETE */

        const deleteButton = rowHtml.querySelector('[data-delete-sq]'); // Find delete button in this row

        deleteButton.dataset.id = colorItem.id; // Put the item id into button attribute: data-id="12345678"

        deleteButton.addEventListener('click', e => { // When delete button clicked...
            const id = parseInt(e.target.dataset.id); // Read id back from clicked button (string -> number)
            Destroy(id); // Remove that id from LIST + save + re-render
        });

        //*** EDIT */

        const editInput = rowHtml.querySelector('[data-edit-color-input]'); // Find edit input in this row
        const editButton = rowHtml.querySelector('[data-edit-color-button]'); // Find edit button in this row

        editInput.value = colorItem.color; // Pre-fill edit input with current saved color value
        editButton.dataset.id = colorItem.id; // Store id on edit button too, so we know what to update

        editButton.addEventListener('click', e => { // When edit button clicked...
            const id = parseInt(e.target.dataset.id); // Get item id from button (string -> number)
            const color = editInput.value; // Read new color value typed by user
            Update(id, color); // Update item in LIST + save + re-render
        });

        colorSq.style.backgroundColor = colorItem.color + '70'; // Set square background (adds alpha '70' for transparency)
        colorSq.style.borderColor = colorItem.color; // Set border to full color (no transparency)

        listBin.appendChild(rowHtml); // Put the finished row into the container
    });
}

/*
Store = Create action (save a new item)
Needs data (color string)
Creates id, builds object, inserts into LIST, saves, re-renders
*/
const Store = data => { // data is the color string from input
    const id = rand(10000000, 99999999); // Generate "fake unique" id (random 8 digits)

    dataToStore = { // Build object to store (NOTE: missing "const" here, see below)
        id, // Shortcut for id: id
        color: data // Save the color string under property "color"
    }

    LIST.unshift(dataToStore); // Add new item to start of array (so newest appears on top)
    writeLocalStorage(); // Save updated LIST to localStorage
    render(); // Re-draw UI so new item appears
}

/*
Destroy = Delete action (remove item)
Gets id
Filters list, saves, re-renders
*/
const Destroy = id => { // id is the item id to remove
    LIST = LIST.filter(color => color.id != id); // Keep only items whose id is NOT the one to delete
    writeLocalStorage(); // Save updated LIST
    render(); // Re-draw UI without deleted item
}

/*
Update = Edit action (change item properties)
Gets id + new data
Maps list, replaces matching item, saves, re-renders
*/
const Update = (id, data) => { // id = which item, data = new color value
    LIST = LIST.map(item => item.id == id ? { ...item, color: data } : item); // If id matches, copy item and replace color
    writeLocalStorage(); // Save updated LIST
    render(); // Re-draw UI with updated color
};

init(); // Run startup: load storage, render, attach event listeners
