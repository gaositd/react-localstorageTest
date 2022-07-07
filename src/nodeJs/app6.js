//algunas funciones de util ya están descontinuadas
const util = require('util');
const http = require('http');
let test = 10;
console.log(util.isNumber(test));
test = "10";
console.log(typeof(test) === 'number');
console.log(http);
console.log(http.Agent);