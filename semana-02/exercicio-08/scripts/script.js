const getAge = () => {
  const birthDate = document.querySelector("#date").value;
  const birth = new Date(birthDate.replace(/-/g, "/"));
  const date = new Date();
  let age = 0;

  if (birth.getMonth() > date.getMonth()) {
    age = date.getFullYear() - birth.getFullYear() - 1;
  } else {
    age = date.getFullYear() - birth.getFullYear();
    if (birth.getMonth() === date.getMonth() && birth.getDate() > date.getDate()) {
      age = date.getFullYear() - birth.getFullYear() - 1;
    }
  }

  const result = document.querySelector("#result");

  result.innerHTML = age;
};
