var a = 1;
var a = 1;
var b = 5;
var c = (a = b);
console.log(c);

// Arrays

let familia = [27, 23, 23, 45];
console.log(familia);

// seleciona o nome
let nome = [true, 45, "jhonatan", 17];
console.log(nome[3]);

// true
let Bird = [true, 45, "jhonatan ", 10];
console.log(Bird.lenght);
console.log(Bird[0]);
let nomeDoColega = [];

//functions

//Verbo + substantivo

let corSite = "azul";
function resetaCor(cor, tonalidade) {
  corSite = cor + "" + tonalidade;
}

console.log(corSite);
resetaCor("verde", " calaro");
console.log(corSite);
