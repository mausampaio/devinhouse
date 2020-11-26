const getCurrentHour = () => {
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  minutes = checkTime(minutes);

  const result = document.querySelector("#hour");

  result.innerHTML = `Agora são: ${date.getHours()}:${date.getMinutes()}`;

  setTimeout(getCurrentHour, 500);
};

function checkTime(minute) {
  if (minute < 10) {minute = "0" + minute};
  return minute;
}

getCurrentHour();
