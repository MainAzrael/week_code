const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("hello world");
});
app.get("/html5", (req, res) => {
    res.send("2003");
});
app.post("/post", (req, res) => {
    res.send("post方式");
});
app.listen(8080, () => {
    console.log("server is running at http://127.0.0.1:8080");
});
const express = require("express");
const app = express();
app.get('/' , (req , res)=>{
    res.send("BK-2003")
})
app.get('/html5' , (req , res)=>{
    res.send('hello')
})
app.post('/post', (req , res)=>{
    res.send('post')
})
app.listen( 8080 , ()=>{
    console.log(" server is running ta http://127.0.0.1:8080");
})
