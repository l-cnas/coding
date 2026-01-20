const taskInput = document.querySelector('.taskInput');
const addTaskBtn = document.querySelector('.addTaskBtn');
const taskList = document.querySelector('.taskList');

// Save to local Storage
const saveToLocalStorage = _ => {
    const nodeList = taskList.querySelectorAll('li');
    const nodeListToArray = [...nodeList] //nodeList verciamas i masyva
    const tasks = nodeListToArray.map(li => (
        {
            text: li.querySelector('span').textContent,
            completed: li.querySelector('.checkbox').checked
        }
    ));

    localStorage.setItem('toDos', JSON.stringify(tasks));

}



// Load from local Storage
const loadFromLocalStorage = _ => {
    const savedTasks = JSON.parse(localStorage.getItem('toDos')) || [];
    savedTasks.forEach(({text, completed }) => addTask(text, completed));

}



// Create
const addTask = (text, completed = false) => {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        return;
    }
    const li = document.createElement('li');
    // li.textContent = taskText;
    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="taskButtons">
        <button class="editBtn"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>
    `

    taskList.appendChild(li);
    taskInput.value = '';

    //Update
    const editBtn = li.querySelector('.editBtn');
    const checkbox = li.querySelector('.checkbox');

    checkbox.addEventListener('change', () => {
        editBtn.disabled = checkbox.checked;
        editBtn.style.pointerEvents = checkbox.checked ? 'none' : 'auto';
        editBtn.style.opacity = checkbox.checked ? '0.5' : '1';
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        li.style.textDecorationThickness = '2px';
        li.style.textDecorationColor = 'black';
        saveToLocalStorage();
    })

    editBtn.addEventListener('click', () => {
        if (!checkbox.checked) {
            taskInput.value = li.querySelector('span')
            li.remove();
            saveToLocalStorage();
        }
    })

    //Delete
    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
        saveToLocalStorage();
    })

    saveToLocalStorage();
}

addTaskBtn.addEventListener('click', (e) => {
    addTask(e);
})