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

    label.addEventListener('click', () => {
      input.checked
        ? taskTitle.setAttribute('style', 'text-decoration: line-through;')
        : taskTitle.setAttribute('style', 'text-decoration: none;')
      ;
    });
  });
};

const app = () => {
  navSlide();
  handleCheckboxClick();
};

app();