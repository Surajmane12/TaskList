document.addEventListener("DOMContentLoaded", function() {
  const taskInput = document.querySelector("#new-task input");
  const taskSection = document.querySelector('.tasks');

  taskInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      createTask();
    }
  });

  document.querySelector('#push').onclick = function() {
    createTask();
  };

  function createTask() {
    if (taskInput.value.length === 0) {
      alert("Please enter the task!");
      return;
    }

    const taskElement = document.createElement('div');
    taskElement.className = 'task';

    const taskLabel = document.createElement('label');
    taskLabel.id = 'taskname';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('p');
    taskText.textContent = taskInput.value;

    checkbox.addEventListener('change', function() {
      if (this.checked) {
        taskText.style.textDecoration = 'line-through';
      } else {
        taskText.style.textDecoration = 'none';
      }
    });

    const deleteButton = document.createElement('div');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '<i class="uil uil-trash"></i>';
    deleteButton.onclick = function() {
      taskElement.remove();
    };

    taskLabel.appendChild(checkbox);
    taskLabel.appendChild(taskText);
    taskElement.appendChild(taskLabel);
    taskElement.appendChild(deleteButton);

    taskSection.appendChild(taskElement);

    taskInput.value = '';

    taskSection.offsetHeight >= 300 ?
      taskSection.classList.add("overflow") :
      taskSection.classList.remove("overflow");
  }
});
