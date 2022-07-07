function saludo(){
  return "Hola"
}

let calculo = {
  duplicar:function(valor){
    return valor * 2;
  },
  dividir:function(valor){
    return valor / 2;
  }
}

console.log(`${saludo()} ${calculo.duplicar(2)} ${calculo.dividir(calculo.duplicar(2))}`);