const isEven = (num1, num2) => {
  const sum = num1 + num2;
  return new Promise((resolve, reject) => {
    if (sum % 2 === 0) {
      resolve(sum);
    } else {
      reject('O resultado não é um número par!')
    }
  });
};
