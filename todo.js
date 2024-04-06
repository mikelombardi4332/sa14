const form = document.getElementById('todoForm');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const taskTitle = document.getElementById('taskTitle').value;
  const taskDetails = document.getElementById('taskDetails').value;

  if (!taskTitle) {
    alert('Please enter a task title');
    return;
  }

  const task = createTaskElement(taskTitle, taskDetails);
  taskList.appendChild(task);

  form.reset();
});

function createTaskElement(title, details) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${title}</strong>`;
  
  if (details) {
    const detailsDiv = document.createElement('div');
    detailsDiv.textContent = details;
    detailsDiv.classList.add('task-details');
    li.appendChild(detailsDiv);
  }

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-btn');
  editButton.addEventListener('click', function() {
    toggleEdit(li);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);
  li.appendChild(actionsDiv);

  return li;
}

function toggleEdit(taskElement) {
  const detailsDiv = taskElement.querySelector('.task-details');
  const editButton = taskElement.querySelector('.edit-btn');

  if (detailsDiv.contentEditable === 'true') {
    detailsDiv.contentEditable = 'false';
    editButton.textContent = 'Edit';
  } else {
    detailsDiv.contentEditable = 'true';
    editButton.textContent = 'Save';
  }
}
