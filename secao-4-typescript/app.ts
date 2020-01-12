// Exemplo
let hello = (name: string) => {
  console.log(`Hello, ${name}!`);
}
hello('Leo');

// Inferencia de tipos - Habilita verif. estática
let msg: string = "Texto"; // msg = 3;  => Erro
let arrayFormat1: Array<string> = ['a','b','c'];
let arrayFormat2: string[] = ['a','b','c'];