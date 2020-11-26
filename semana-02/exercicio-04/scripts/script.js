const name = prompt("Qual o seu nome?");
const age = parseInt(prompt("Qual a sua idade?"));
let sport = parseInt(prompt("Você pratica algum esporte? Digite 1 para sim e 0 para não"));

sport === 1 ? sport = true : sport = false; 

console.log(name);
console.log(age);
console.log(sport);
