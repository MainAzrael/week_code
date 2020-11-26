const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.post("/post", (req, res) => {
    console.log(req.body);
});

app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");   
});