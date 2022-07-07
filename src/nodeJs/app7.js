const http = require('http');
const PORT = 1025;
const server = http.createServer(function(req, res ){
  console.log("web response");
  res.writeHead(200, {"Content-Type": 'text/html'});
  res.write(`Salida al navegador en accion ${req.url}`)
  res.end();
});

server.listen(PORT);
console.log(`Servidor corriendo en el puerto ${PORT}`);