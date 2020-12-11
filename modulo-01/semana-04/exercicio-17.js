const printBooksRack = (first, second, third, ...rest) => {
  console.log(`O primeiro colocado é: ${first}`);
  console.log(`O segundo colocado é: ${second}`);
  console.log(`O terceiro colocado é: ${third}`);
  console.log(`Demais colocações: ${rest}`)
};
