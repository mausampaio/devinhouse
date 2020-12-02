const addButton = document.querySelector('#add-button');
const marketList = document.querySelector('#market-list');
let marketlistArray = [];

const getMarketList = () => {
  if (JSON.parse(localStorage.getItem('marketList'))) {
    marketlistArray = JSON.parse(localStorage.getItem('marketList'));
  
    marketlistArray.forEach(item => {
      createListElement(item);
    });
  }
};

const createListElement = (item) => {
  const option = document.createElement('option');
  option.value = item;
  option.innerHTML = item;
  marketList.appendChild(option);
};

const addToList = () => {
  const marketItem = document.querySelector('#item-title').value;

  if (marketItem) {
    createListElement(marketItem);
    setMarketList(marketItem);
  } else {
    alert('Insira um item!')
  }
};

const setMarketList = (item) => {
  marketlistArray.push(item);
  localStorage.setItem('marketList', JSON.stringify(marketlistArray));
};

addButton.addEventListener('click', addToList);
getMarketList();