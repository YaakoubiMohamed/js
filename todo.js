// Récupérer les éléments de l'interface utilisateur
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Ajouter une tâche
addButton.addEventListener('click', function() {
  const task = taskInput.value;
  if (task) {
    addTask(task);
    saveTasks();
    taskInput.value = '';
  }
});

// Supprimer ou mettre à jour une tâche
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('deleteButton')) {
    const taskItem = event.target.parentNode;
    const taskIndex = Array.from(taskList.children).indexOf(taskItem);
    removeTask(taskIndex);
    saveTasks();
  } else if (event.target.classList.contains('updateButton')) {
    const taskItem = event.target.parentNode;
    const taskIndex = Array.from(taskList.children).indexOf(taskItem);
    const updatedTask = prompt('Modifier la tâche :', taskItem.firstChild.textContent);
    if (updatedTask) {
      updateTask(taskIndex, updatedTask);
      saveTasks();
    }
  }
});

// Ajouter une tâche à la liste
function addTask(task) {
  const taskItem = document.createElement('li');
  const taskText = document.createElement('span');
  taskText.textContent = task;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Supprimer';
  deleteButton.classList.add('deleteButton');
  const updateButton = document.createElement('button');
  updateButton.textContent = 'Modifier';
  updateButton.classList.add('updateButton');
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteButton);
  taskItem.appendChild(updateButton);
  taskList.appendChild(taskItem);
}

// Supprimer une tâche de la liste
function removeTask(index) {
  taskList.removeChild(taskList.children[index]);
}

// Mettre à jour une tâche dans la liste
function updateTask(index, updatedTask) {
  taskList.children[index].firstChild.textContent = updatedTask;
}

// Enregistrer les tâches dans le Local Storage
function saveTasks() {
  const tasks = Array.from(taskList.children).map(function(taskItem) {
    return taskItem.firstChild.textContent;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Charger les tâches depuis le Local Storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  if (tasks) {
    tasks.forEach(function(task) {
      addTask(task);
    });
  }
}

// Charger les tâches au chargement de la page
loadTasks();
