// Select DOM elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

// Add event listener to the "Add Task" button
addButton.addEventListener('click', addTask);

// Add Task Function
function addTask() {
    const task = todoInput.value.trim(); // Get input and remove extra spaces

    if (task === "") {
        alert('Please enter a task!');
        return;
    }

    // Create a new <li> element for the task
    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="delete-btn">Delete</button>`;

    // Add event listener to mark task as complete
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    // Add event listener to delete task
    li.querySelector('.delete-btn').addEventListener('click', function (e) {
        e.stopPropagation(); // Stop the event from triggering the parent click event
        li.remove(); // Remove the task item
    });

    // Append the new task to the todo list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = "";
}
