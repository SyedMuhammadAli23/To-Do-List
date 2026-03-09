let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  document.getElementById('list').innerHTML = '';
  tasks.forEach((task, index) => {
    document.getElementById('list').innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">Delete</button>
      </li>
    `;
  });
}

function addTask() {
  const task = document.getElementById('task').value;
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
  document.getElementById('task').value = '';
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
}

renderTasks();