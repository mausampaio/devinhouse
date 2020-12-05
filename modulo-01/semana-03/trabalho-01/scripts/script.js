const modal = document.querySelector('#addTaskModal');
const cardContent = document.querySelector('.card-content .checklist');
let tasklist = [];

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animação do burger menu
    burger.classList.toggle('toggle');
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

const handleTaskTitleClick = () => {
  const taskContainers = document.querySelectorAll('.task-container'); 

  taskContainers.forEach((taskContainer) => {
    const taskTitle = taskContainer.querySelector('.task-title');

    taskTitle.addEventListener('click', () => {
      openEditModal(taskContainer);
    });
  });
};

const handleTaskDeleteClick = () => {
  const taskContainers = document.querySelectorAll('.task-container');

  taskContainers.forEach(taskContainer => {
    const deleteButton = taskContainer.querySelector('i');

    deleteButton.addEventListener('click', () => {deleteTask(taskContainer)});
  });
};

const addModalClick = () => {
  const modalContent = document.querySelector('.modal-content');
  modalContent.addEventListener('click', modalClick);
};

const openModal = (title, placeholder, buttonTitle, func) => {
  const modalTitle = document.querySelector('.modal-title');
  const modalInput = document.querySelector('.modal-form input');
  const modalForm = document.querySelector('.modal-form');
  const modalButton = document.querySelector('.modal-form button');

  modalTitle.textContent = title;
  modalInput.placeholder = placeholder;

  // Criação de um novo botão a cada abertura para limpar os event listeners.
  if (!modalButton) {
    const newModalButton = document.createElement('button');
    newModalButton.innerHTML = buttonTitle;
    newModalButton.addEventListener('click', func);
    modalForm.appendChild(newModalButton);
  }

  modal.classList.add('visible');
};

const openAddModal = () => {
  openModal('Nova Tarefa', 'Nome da tarefa', 'Adicionar', addTask);
};

const openEditModal = (taskContainer) => {
  openModal('Editar Tarefa', 'Nome da tarefa', 'Editar', () => {editTask(taskContainer)});
};

const closeModal = () => {
  removeValidation();
  const modalForm = document.querySelector('.modal-form');
  const modalButton = document.querySelectorAll('.modal-form button');

  modal.classList.remove('visible');

  modalButton.forEach(button => {
    modalForm.removeChild(button);
  });
};

// Função para impedir que ao clicar no modal o mesmo seja fechado.
const modalClick = (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
};

const cleanChecklist = () => {
  const checklist = document.querySelector('.checklist');

  checklist.innerHTML = "";
};

const getId = () => {
  let lastId = 0;

  if (JSON.parse(localStorage.getItem('tasklist'))) {
    tasklist = JSON.parse(localStorage.getItem('tasklist'));

    tasklist.forEach(item => {
      if (lastId < item.id) {
        lastId = item.id;
      }
    });
  }

  return lastId + 1;
};

const getTaskList = (search, filter) => {
  if (JSON.parse(localStorage.getItem('tasklist'))) {
    cleanChecklist();

    tasklist = JSON.parse(localStorage.getItem('tasklist'));
  
    tasklist.forEach(item => {
      if (search) {
        if (item.title.toLowerCase().includes(search.toLowerCase())) {
          createTaskElement(item.title, item.checked, item.id);
          createDeleteButton();
        }
      } else {
        if (filter === 'checked') {
          if (item.checked) {
            createTaskElement(item.title, item.checked, item.id);
            createDeleteButton();
          }
        } else if (filter === 'unchecked') {
          if (!item.checked) {
            createTaskElement(item.title, item.checked, item.id);
            createDeleteButton();
          }
        } else {
          createTaskElement(item.title, item.checked, item.id);
          createDeleteButton();
        }
      }
    });

    handleCheckboxClick();
    handleTaskTitleClick();
    handleTaskDeleteClick();
  }
};

const getCheckedTaskList = () => {
  getTaskList(false, 'checked');
};

const getUncheckedTaskList = () => {
  getTaskList(false, 'unchecked');
};

const getSearchedTaskList = (e) => {
  e.preventDefault();

  const searchInput = document.querySelector('.search input');

  getTaskList(searchInput.value);
};

const createTaskElement = (taskValue, checked, id) => {
  const task = document.createElement('div');
  const taskTitle = document.createElement('div');
  task.id = id;
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

const createDeleteButton = () => {
  const checkboxContainers = document.querySelectorAll('.task-container');
  const deleteButton = document.createElement('i');

  deleteButton.classList.add('material-icons');
  deleteButton.innerHTML = 'delete_outline';

  checkboxContainers.forEach(container => {
    container.appendChild(deleteButton);
  });
};

const validation = () => {
  const validation = document.querySelector('.validation');
  const input = document.querySelector('.modal-form input');

  validation.classList.add('visible');
  input.classList.add('input-validation');
  input.focus();
};

const removeValidation = () => {
  const validation = document.querySelector('.validation');
  const input = document.querySelector('.modal-form input');

  validation.classList.remove('visible');
  input.classList.remove('input-validation');
};

const addTask = () => {
  const id = getId();

  const taskInput = document.querySelector('#taskInput');

  if (taskInput.value === "") {
    validation();
  } else {
    removeValidation();

    createTaskElement(taskInput.value, false, id);

    createDeleteButton();
    
    setTaskList(taskInput, id);

    closeModal();

    taskInput.value = "";

    handleCheckboxClick();
    handleTaskTitleClick();
    handleTaskDeleteClick();
  }
};

const editTask = (taskContainer) => {
  const taskInput = document.querySelector('#taskInput');
  const taskTitle = taskContainer.querySelector('.task-title');

  if (taskInput.value === "") {
    validation();
  } else {
    removeValidation();

    tasklist = tasklist.map(task => {
      if (task.id === parseInt(taskContainer.id)) {
        task = {
          ...task,
          title: taskInput.value,
        };
      }
  
      return task;
    });

    taskTitle.innerHTML = taskInput.value;
  
    localStorage.setItem('tasklist', JSON.stringify(tasklist));
  
    closeModal();
  
    taskInput.value = "";
  }
};

const deleteTask = (taskContainer) => {
  const parentContainer = taskContainer.parentElement;

  if (JSON.parse(localStorage.getItem('tasklist'))) {
    tasklist = JSON.parse(localStorage.getItem('tasklist'));
    
    tasklist.forEach((item, index) => {
      if (item.id === parseInt(taskContainer.id)) {
        tasklist.splice(index, 1);
      }
    });

    localStorage.setItem('tasklist', JSON.stringify(tasklist));
    parentContainer.removeChild(taskContainer);
  }
};

const setTaskList = (taskInput, id) => {
  const task = {
    id,
    title: taskInput.value,
    checked: false,
  };
  tasklist.push(task);
  localStorage.setItem('tasklist', JSON.stringify(tasklist));
};

const app = () => {
  navSlide();
  addModalClick();
  getTaskList();
};

app();