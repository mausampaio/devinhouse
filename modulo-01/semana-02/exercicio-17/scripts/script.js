function getPA() {
  const result = document.querySelector('#result');
  const inputInit = document.querySelector('#initValue');
  const inputRoot = document.querySelector('#root');
  let loops = 10;
  let initValue = parseInt(inputInit.value);
  if (inputInit.value === "" || inputRoot === "") {
    alert('Favor informar um número!');
  } else {
    while (loops > 0) {
      if (loops === 10) {
        result.innerHTML += `PA: 1`;
      } else {
        const resultValue = initValue + parseInt(inputRoot.value);
        initValue = resultValue;
  
        result.innerHTML += `  ,${resultValue}`;
      }

      loops--;
    }
  }
}
function getPG() {
  const result = document.querySelector('#result');
  const inputInit = document.querySelector('#initValue');
  const inputRoot = document.querySelector('#root');
  let loops = 10;
  let initValue = parseInt(inputInit.value);
  if (inputInit.value === "" || inputRoot === "") {
    alert('Favor informar um número!');
  } else {
    while (loops > 0) {
      if (loops === 10) {
        result.innerHTML += `PG: 1`;
      } else {
        const resultValue = initValue * parseInt(inputRoot.value);
        initValue = resultValue;
  
        result.innerHTML += `  ,${resultValue}`;
      }

      loops--;
    }
  }
}
