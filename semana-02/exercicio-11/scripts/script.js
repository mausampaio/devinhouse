const getCurrentHour = () => {
  const date = new Date();

  const result = document.querySelector("#hour");

  result.innerHTML = `Agora são: ${date.getHours()}:${date.getMinutes()}`;
};

getCurrentHour();
