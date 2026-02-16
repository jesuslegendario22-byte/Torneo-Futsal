const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;

http.createServer((req, res) => {
  let filePath = "." + req.url;
  if (filePath == "./") filePath = "./index.html";

  const extname = path.extname(filePath);
  let contentType = "text/html";

  if (extname == ".css") contentType = "text/css";
  if (extname == ".js") contentType = "text/javascript";
  if (extname == ".png") contentType = "image/png";
  if (extname == ".jpg" || extname == ".jpeg") contentType = "image/jpeg";

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Archivo no encontrado");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
}).listen(port);

console.log(`Servidor corriendo en http://localhost:${port}`);
