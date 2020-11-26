const evenOrOdd = () => {
  const value = parseInt(document.querySelector("#value").value);
  const result = document.querySelector("#result");

  value % 2 === 0 ? result.innerHTML = "Par" : result.innerHTML = "Impar";
};
