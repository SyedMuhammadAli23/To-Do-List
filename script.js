let tasks = [];

function addTask() {
  const task = document.getElementById('task').value;
  tasks.push(task);
  document.getElementById('list').innerHTML += `<li>${task}</li>`;
  document.getElementById('task').value = '';
}