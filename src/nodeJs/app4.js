//importar módulos externos
const moment = require('moment');

console.log(moment("2022-06-06").format().toString());
console.log(moment("2022-06-06").format('H:m:s').toString());
console.log(moment("2022-06-06").format('DD/MM/YY').toString());
console.log(moment("2022-06-06").format('DD-MM-YYYY').toString());