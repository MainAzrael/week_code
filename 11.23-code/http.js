const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
    if (req.url === "/") {
        res.end("hello world");
    }
    if (req.url === "/html5") {
        res.end("2003");
    }
});


server.listen(8080, () => {
  
    console.log("server is running at http://127.0.0.1:8080");
});
