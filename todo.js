// Récupérer les éléments de l'interface utilisateur
const taskInput = document.getElementById('taskInput'); // Récupère l'élément HTML avec l'ID 'taskInput' et le stocke dans la variable taskInput
const addButton = document.getElementById('addButton'); // Récupère l'élément HTML avec l'ID 'addButton' et le stocke dans la variable addButton
const taskList = document.getElementById('taskList'); // Récupère l'élément HTML avec l'ID 'taskList' et le stocke dans la variable taskList

// Ajouter une tâche
addButton.addEventListener('click', function() { // Ajoute un écouteur d'événements sur le bouton addButton qui déclenche une fonction anonyme lorsqu'il est cliqué
  const task = taskInput.value; // Stocke la valeur de l'élément taskInput dans la variable task
  if (task) { // Vérifie si task n'est pas vide
    addTask(task); // Appelle la fonction addTask avec la variable task en argument
    saveTasks(); // Appelle la fonction saveTasks
    taskInput.value = ''; // Réinitialise la valeur de taskInput à une chaîne vide
  }
});

// Supprimer ou mettre à jour une tâche
taskList.addEventListener('click', function(event) { // Ajoute un écouteur d'événements sur la liste taskList qui déclenche une fonction anonyme lorsqu'un élément est cliqué
  if (event.target.classList.contains('deleteButton')) { // Vérifie si l'élément cliqué a la classe 'deleteButton'
    const taskItem = event.target.parentNode; // Stocke l'élément parent de l'élément cliqué dans la variable taskItem
    const taskIndex = Array.from(taskList.children).indexOf(taskItem); // Trouve l'index de taskItem dans la liste taskList et le stocke dans la variable taskIndex
    removeTask(taskIndex); // Appelle la fonction removeTask avec taskIndex en argument
    saveTasks(); // Appelle la fonction saveTasks
  } else if (event.target.classList.contains('updateButton')) { // Vérifie si l'élément cliqué a la classe 'updateButton'
    const taskItem = event.target.parentNode; // Stocke l'élément parent de l'élément cliqué dans la variable taskItem
    const taskIndex = Array.from(taskList.children).indexOf(taskItem); // Trouve l'index de taskItem dans la liste taskList et le stocke dans la variable taskIndex
    const updatedTask = prompt('Modifier la tâche :', taskItem.firstChild.textContent); // Stocke la nouvelle valeur de la tâche dans la variable updatedTask en utilisant la fonction prompt
    if (updatedTask) { // Vérifie si updatedTask n'est pas vide
      updateTask(taskIndex, updatedTask); // Appelle la fonction updateTask avec taskIndex et updatedTask en arguments
      saveTasks(); // Appelle la fonction saveTasks
    }
  }
});

// Ajouter une tâche à la liste
function addTask(task) { // Définit la fonction addTask avec task en argument
  const taskItem = document.createElement('li'); // Crée un nouvel élément li et le stocke dans la variable taskItem
  const taskText = document.createElement('span'); // Crée un nouvel élément span et le stocke dans la variable taskText
  taskText.textContent = task; // Définit le texte de taskText à la valeur de la variable task
  const deleteButton = document.createElement('button'); // Crée un nouvel élément button et le stocke dans la variable deleteButton
  deleteButton.textContent = 'Supprimer'; // Définit le texte de deleteButton à 'Supprimer'
  deleteButton.classList.add('deleteButton'); // Ajoute la classe 'deleteButton' à deleteButton
  const updateButton = document.createElement('button'); // Crée un nouvel élément button et le stocke dans la variable updateButton
  updateButton.textContent = 'Modifier'; // Définit le texte de updateButton à 'Modifier'
  updateButton.classList.add('updateButton'); // Ajoute la classe 'updateButton' à updateButton
  taskItem.appendChild(taskText); // Ajoute taskText comme enfant de taskItem
  taskItem.appendChild(deleteButton); // Ajoute deleteButton comme enfant de taskItem
  taskItem.appendChild(updateButton); // Ajoute updateButton comme enfant de taskItem
  taskList.appendChild(taskItem); // Ajoute taskItem comme enfant de taskList
}

// Supprimer une tâche de la liste
function removeTask(index) { // Définit la fonction removeTask avec index en argument
  console.log("Removing task index",index); // Affiche un message dans la console avec l'index de la tâche à supprimer
  taskList.removeChild(taskList.children[index]); // Supprime l'élément enfant de taskList à l'index spécifié par index
}

// Mettre à jour une tâche dans la liste
function updateTask(index, updatedTask) { // Définit la fonction updateTask avec index et updatedTask en arguments
  taskList.children[index].firstChild.textContent = updatedTask; // Modifie le texte de l'élément enfant de taskList à l'index spécifié par index avec la valeur de updatedTask
}

// Enregistrer les tâches dans le Local Storage
function saveTasks() { // Définit la fonction saveTasks
  const tasks = Array.from(taskList.children).map(function(taskItem) { // Crée un tableau tasks à partir des éléments enfants de taskList et applique une fonction anonyme à chaque élément
    return taskItem.firstChild.textContent; // Retourne le texte du premier élément enfant de taskItem
  });
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Stocke le tableau tasks dans le Local Storage en le transformant en chaîne JSON
}

// Charger les tâches depuis le Local Storage
function loadTasks() { // Définit la fonction loadTasks
  const tasks = JSON.parse(localStorage.getItem('tasks')); // Récupère le tableau tasks depuis le Local Storage et le transforme en objet JavaScript
  if (tasks) { // Vérifie si tasks n'est pas vide
    tasks.forEach(function(task) { // Applique une fonction anonyme à chaque élément de tasks
      addTask(task); // Appelle la fonction addTask avec l'élément courant de tasks en argument
    });
  }
}

// Charger les tâches au chargement de la page
loadTasks(); // Appelle la fonction loadTasks