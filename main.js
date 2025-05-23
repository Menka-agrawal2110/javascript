document.querySelector('#push').onclick = function addtask() {
    const inputField = document.querySelector('#newtask input');
    const taskContainer = document.querySelector('#task');

    if (inputField.value.trim().length === 0) {
        window.alert("Please enter a task");
    } else {
        taskContainer.innerHTML += `
            <div class="task">
                <span class="taskname">${inputField.value}</span>
                <button class="delete">X</button>
            </div>
        `;

        // Add delete functionality
        const current_tasks = document.querySelectorAll('.delete');
        current_tasks.forEach(button => {
            button.onclick = function () {
                this.parentNode.remove();
            };
        });

        // Add task complete toggle functionality
        const taskNames = document.querySelectorAll('.taskname');
        taskNames.forEach(name => {
            name.onclick = function () {
                this.classList.toggle('completed');
            };
        });

        inputField.value = ""; // Clear input after adding task
    }
};
