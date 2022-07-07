var miModulo = {
  multiplicar:function(valor){
    const Valor = valor * 3;
    console.log(Valor);
    return Valor;
  },
  dividir:function(valor){
    console.log(valor / 3);
  },
}

module.exports = miModulo;