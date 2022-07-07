let valor1 = "Hola";
let valor2 = " Mundo"
const valor3 = valor1 + " " + valor2;
console.log(valor3);

function mostrarSaludo(){
  let valor1 = "Hola";
  let valor2 = " Mundo"
  const valor3 = valor1 + " " + valor2;
  console.log(valor3);
  valor1 = 10;
  console.log(valor1);
  valor2 = true;
  console.log(valor2);

  let obj = {
    tema:"curso NodeJs",
    leccion:"datos compuestos",
    numero:2,
  }

  console.log(obj.tema);
}

mostrarSaludo();