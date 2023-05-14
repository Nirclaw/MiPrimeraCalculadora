const forulario = document.querySelector("form");
forulario.addEventListener("submit", (el) => {
  el.preventDefault();
});
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const retro = document.getElementById("retro");
const delet = document.getElementById("borrar");
const div = document.getElementById("div");
const multiply = document.getElementById("multiply");
const sum = document.getElementById("sum");
const equal = document.getElementById("equal");
const restar = document.getElementById("restar");
const point = document.getElementById("point");

const acumular = document.getElementById("acumular");
const patalla = document.getElementById("imprimir");

console.log(patalla.innerText);
let datos = [];
let operar = [];
// if(vacio[1]=="suma"){

//     console.log(suma(vacio[0],vacio[2]));
// }else if(vacio[1]=='resta'){
//     console.log( resta(vacio[0],vacio[2]));
// }

// function suma(a,b){
//     return a + b
// }
// function resta(a,b){
//     return a - b
// }
one.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += one.value;

  console.log(patalla.innerText);
});

two.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += two.value;
});
three.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += three.value;
});
four.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += four.value;
});
five.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += five.value;
});
six.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += six.value;
});
seven.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += seven.value;
});
eight.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += eight.value;
});
nine.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += nine.value;
});

zero.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText += zero.value;
});
div.addEventListener("click", (el) => {
  el.preventDefault();
  if (patalla.innerText != "") datos.push(parseInt(patalla.innerText), div.value);
  acumular.innerText += patalla.innerText + div.value;
  patalla.innerText = "";
  console.log(datos);
});

sum.addEventListener("click", (el) => {
  el.preventDefault();
  if (patalla.innerText != "")
    datos.push(parseInt(patalla.innerText), sum.value);

  acumular.innerText += patalla.innerText + sum.value;

  patalla.innerText = "";
  console.log(datos);
});

equal.addEventListener("click", (el) => {
  el.preventDefault();
  acumular.innerText += patalla.innerText;
  if (patalla.innerText != "") datos.push(parseInt(patalla.innerText));
  for (let i = 0; i < datos.length; i++) {
    if (datos[i] == "+") delete datos[i], (ope = "suma");
    if (datos[i] == "/") delete datos[i], (ope = "div");
    if (datos[i] == "*") delete datos[i], (ope = "multi");
    if (datos[i] == "-") delete datos[i], (ope = "resta");
    if (datos[i] !== undefined) operar.push(datos[i]);
  }

  datos = [];
  switch (ope) {
    case "suma":
      patalla.innerText = operar.reduce(function (ant, sige) {
        return (ant = ant + sige);
      }, 0);
      break;
    case "div":
      patalla.innerText = operar.reduce(function (ant, sige) {
        return ant / sige;
      });
      break;
    case "multi":
      patalla.innerText = operar.reduce(function (ant, sige) {
        return ant * sige;
      });
      break;
    case "resta":
      patalla.innerText = operar.reduce(function (ant, sige) {
        return ant - sige;
      });
      break;
  }

  console.log(operar, "holaaa");

  operar = [];
});

restar.addEventListener("click", (el) => {
  el.preventDefault();
  if (patalla.innerText != "")
    datos.push(parseInt(patalla.innerText), restar.value);

  acumular.innerText += patalla.innerText + restar.value;

  patalla.innerText = "";
  console.log(datos);
});

point.addEventListener("click", (el) => {
  
  
});
multiply.addEventListener("click", (el) => {
  el.preventDefault();
  if (patalla.innerText != "")
    datos.push(parseInt(patalla.innerText), multiply.value);

  acumular.innerText += patalla.innerText + multiply.value;

  patalla.innerText = "";
  console.log(datos);
});
delet.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText = delet.value;
  acumular.innerText = delet.value;
  datos = [];
  console.log(datos);
});

retro.addEventListener("click", (el) => {
  el.preventDefault();
  patalla.innerText = retro.value;
});
