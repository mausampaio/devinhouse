const modal = document.querySelector('#addTaskModal');
const modalContent = document.querySelector('.modal-content');
const cardContent = document.querySelector('.card-content .checklist');
let tasklist = [];

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
  });
};

const handleCheckboxClick = () => {
  const labels = document.querySelectorAll('.checkbox-container');

  labels.forEach((label) => {
    const input = label.querySelector('input');
    const taskContainer = label.parentElement;
    const taskTitle = taskContainer.querySelector('.task-title');

    handleInputCheck(taskTitle, input);

    label.addEventListener('click', () => {
      handleInputCheck(taskTitle, input);

      setTaskChecked(taskTitle, input);
    });
  });
};

const handleInputCheck = (taskTitle, input) => {
  input.checked
    ? taskTitle.setAttribute('style', 'text-decoration: line-through;')
    : taskTitle.setAttribute('style', 'text-decoration: none;')
  ;
};

const setTaskChecked = (taskTitle, input) => {
  tasklist = tasklist.map(task => {
    if (task.title === taskTitle.textContent) {
      task = {
        ...task,
        checked: input.checked ? true : false,
      };
    }

    return task;
  });

  localStorage.setItem('tasklist', JSON.stringify(tasklist));
};

const addModalClick = () => {
  modalContent.addEventListener('click', modalClick);
};

const openModal = () => {
  modal.classList.add('visible');
};

const closeModal = () => {
  modal.classList.remove('visible');
};

function modalClick(e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
};

const getTaskList = () => {
  if (JSON.parse(localStorage.getItem('tasklist'))) {
    tasklist = JSON.parse(localStorage.getItem('tasklist'));
  
    tasklist.forEach(item => {
      createTaskElement(item.title, item.checked);
    });

    handleCheckboxClick();
  }
};

const createTaskElement = (taskValue, checked) => {
  const task = document.createElement('div');
  const taskTitle = document.createElement('div');
  task.classList.add('task-container');
  task.innerHTML = `<label class="checkbox-container">
    <input type="checkbox" ${checked && 'checked'}>
    <span class="check-box">
      <svg width="24" height="24">
        <path fill="#999" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path>
      </svg>
    </span>
  </label>`;
  taskTitle.classList.add('task-title');
  taskTitle.innerHTML = taskValue;
  task.appendChild(taskTitle);

  cardContent.appendChild(task);
};

const addTask = () => {
  const taskInput = document.querySelector('#taskInput');

  if (taskInput.value) {
    createTaskElement(taskInput.value, false);
    
    setTaskList(taskInput);

    closeModal();
    taskInput.value = "";
    handleCheckboxClick();
  } else {
    alert('Digite uma tarefa!')
  }
};

const setTaskList = (taskInput) => {
  const task = {
    title: taskInput.value,
    checked: false,
  };
  tasklist.push(task);
  localStorage.setItem('tasklist', JSON.stringify(tasklist));
};

const app = () => {
  navSlide();
  handleCheckboxClick();
  addModalClick();
  getTaskList();
};

app();