document.getElementById("addTaskBtn").addEventListener('click', () => {
    const inputText = document.getElementById('taskInput');
    const task = inputText.value.trim();

    if (task == '') {
        return alert("Enter a task");
    }
    const li = document.createElement('li');
    li.classList.add("List-items");

    const span = document.createElement("span");
    span.innerText = task;
    li.appendChild(span)

    const completed = document.createElement('i');
    completed.classList.add('bi', 'bi-check', 'fs-4', 'text-success');
    li.appendChild(completed);

    completed.addEventListener('click', () => {
        span.classList.toggle('completed');
    })

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bi', 'bi-trash', 'fs-4', 'text-danger');
    li.appendChild(deleteIcon);

    deleteIcon.addEventListener('click', () => {
        li.remove();
    })

    document.getElementById("taskList").appendChild(li)
    inputText.value = '';
})