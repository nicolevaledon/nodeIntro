const http = require("http");

http
  .createServer((request, response) => {
    response.end("Hello World!");
  })

  .listen(5000, () => {
    console.log("Server listening at http://localhost:5000...");
  });
