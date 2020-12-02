const addButton = document.querySelector('#add-button');

const addToList = () => {
  const marketItem = document.querySelector('#item-title').value;
  const marketList = document.querySelector('#market-list');
  const option = document.createElement('option');

  if (marketItem) {
    option.value = marketItem;
    option.innerHTML = marketItem;
    marketList.appendChild(option);
  } else {
    alert('Insira um item!')
  }
};

addButton.addEventListener('click', addToList);