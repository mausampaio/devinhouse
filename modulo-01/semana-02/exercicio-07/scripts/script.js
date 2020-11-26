const currentYear = parseInt(prompt("Qual o ano atual?"));
const birthdayYear = parseInt(prompt("Qual o ano de nascimento?"));

const age = currentYear - birthdayYear;

alert(`Sua idade é ${age} ou ${age - 1}`);
