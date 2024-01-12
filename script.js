//pergutando o nome e respondendo----------------
/*
let name = prompt("Qual o seu nome?")
alert('Olá, ' + name)
*/

//perguntando os números e depois operando eles com operadores matemáticos----------------
/*alert("Vamos multiplicar três números e depois dividir eles por 5")
let numberOne = prompt('Digite aqui o primeiro número')
let numberTwo = prompt('Digite aqui o segundo número')
let numberThree = prompt('Digite aqui o terceiro número')
let result = ((Number(numberOne) * Number(numberTwo) * Number(numberThree)) /5)

alert('O resultado final é de :' + result)*/

//----------------------------------------------------Mais operadores matemáticos--------
/*let firstNumber = prompt('Digite o primeiro número')
let secontNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secontNumber = Number(secontNumber)

const sum = firstNumber + secontNumber
const sub = firstNumber - secontNumber
const mult = firstNumber * secontNumber
const div = firstNumber / secontNumber
const rest = firstNumber % secontNumber

alert ('Soma ' + sum);
alert('Subtração ' + sub)
alert('Multiplicação ' + mult)
alert('Divisão ' + div)
alert('Resto da multiplicação ' + rest)*/

//pegando o nome do aluno e calculando a média dele------------------------------------
/*
let name = prompt("Qual o nome do aluno ?");
let n1 = prompt("nota da primeira prova");
let n2 = prompt("nota da segunda prova");
let n3 = prompt("nota da terceira prova");


let soma = (Number(n1) + Number(n2) + Number(n3)) / 3;
let result = soma > 6;
alert(result);
soma = soma.toFixed(1)
if (result) {
  alert("Parabéns, " + name + "! Sua média foi de: " + soma);
} 
else if(soma < 3){
    alert('Reprovado')
}

else {
  alert("Se esforçe para a recuperação, sua média foi de: " + soma);
}*/

//capturando 10 itens de uma lista de mercado e separando elas por uma vírgula
/*
let items = []
 for(let item = 0; item < 10; item++){

let itemName = prompt('Digite o item ' + (item + 1))
items[item] = itemName

 }
 alert(items)*/

//apresente a mensagem ao usuário:
//"adivinhe o número em que eu estou pensando, de 1 a 10:"

//crie uma lógica para gerar um número aleatório
//e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

//enquanto o usuário não advinhar o número, mostrar a mensagem:
//erro, tente novamente:

// caso contrário, apresentar a mensagem:
// parabéns, você acertou o número em x tentativas
// trocar o X pelo número de tentativas feitas pelo usuário.

/*
let result = prompt("adivinhe o número em que eu estou pensando, de 1 a 10:")

const randomNumber = Math.round(Math.random() * 10)

 let xAttempts = 1;

while(Number(result) != randomNumber){

  result = prompt("Erro, tente novamente:")
  xAttempts ++

}

if(xAttempts > 1){

alert(`Parabéns, você acertou em ${xAttempts} tentativas`)

}
else{
alert(`Parabéns, você acertou em ${xAttempts} tentativa!`)

}
*/

//Faça um programa que apresente a seguinte mensagem ao usuário:
//Olá usuário! Digite a opção desejada

//1. Cadastrar um item na lista
//2. Mostrar itens cadastrados
//3.Sair do programa

//O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:
//Caso o usuário digite 1, ele poderá cadastrar um item na lista
//Caso o usuário diite 2, vai mostrar os itens cadastrados/se não houver item cadastrado, apresentar a mensagem: "Não existem itens cadastrados"
//Caso o usuário digite 3, a aplicação deverá ser encerrada.

/*
let option
let items = []

while(option != 3){
 option = Number(
  prompt(`
  Olá usuário! Digite a opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa`));
  
  if(option == 1) {

    let item = prompt("Digite o nome do item:");
    items.push(item)

  } 
  else if (option == 2) {

    if (items.length == 0) {
      alert("Não existem itens cadastrados");
    }
    else{
      alert(items)
    }
  } 
  else {
    alert("Tchau");
  }
  
}
*/

// crie uma lista de pacientes
// cada paciente deverá conter
// nome, idade, peso e altura
//escreva uma lista com o nome dos pacientes
/*
let patients = [
{
  name: "Caio",
  age: 21,
  weigth: 93.4,
  heigth: 1.91,
},
{
  name: " Gabriella",
  age: 17, 
  weigth: 116.4,
  heigth: 1.77,

},
]

let patientsName = []
let patientsAge = []
let patientsWeigth = []
let patientsHeigth = []

for(let index of patients){
  patientsName.push(index.name)
  patientsAge.push(index.age)
  patientsWeigth.push(index.weigth)
  patientsHeigth.push(index.heigth)

}
alert(`O ${patientsName[0]} tem ${patientsAge[0]} anos de idade, pesa ${patientsWeigth[0]}kg e tem ${patientsHeigth[0]} de altura`)
alert(`A ${patientsName[1]} tem ${patientsAge[1]} anos de idade, pesa ${patientsWeigth[1]}kg e tem ${patientsHeigth[1]} de altura`)
*/

// calculando o imc dos pacientes
/*
let patients = [
  {
    name: "Caio",
    age: 21,
    weigth: 93.4,
    heigth: 1.91,
  },
  {
    name: " Gabriella",
    age: 17,
    weigth: 116.4,
    heigth: 1.77,
  },
];
function calcImc(weigth, heigth) {
  return (weigth / heigth ** 2).toFixed(3);
}

function resultCalc(patients) {
  return `Paciente ${patients.name} tem o IMC de: ${calcImc(
    patients.weigth,
    patients.heigth
  )}`;
}
for (let resultImc of patients) {
  let imcPatients = resultCalc(resultImc);
  alert(imcPatients);
}
*/





//DESAFIO PRÁTICO

let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber

let sub = firstNumber - secondNumber

let mult = firstNumber * secondNumber

let div = firstNumber / secondNumber

let rest = firstNumber % secondNumber

alert(`A soma dos números é de ${sum}`)
alert(`A subtração dos números é de ${sub}`)
alert(`A multiplicação dos números é de ${mult}`)
alert(`A divisão dos números é de ${div}`)
alert(`O resto da divisão dos números é de ${rest}`)



if(firstNumber % 2 === 0){
  alert("O número digitado é par");
}
else{
  alert("O número digitado é ímpar")
}
if(firstNumber === secondNumber){
  alert("Os números são iguais")
}
else{
  alert('Os números são diferentes')
}
