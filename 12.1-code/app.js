const express = require('express');
const router = require('./routers/routers')
const app = express();
const port = 3000
app.use(router);
app.listen(port, () => {console.log(`server is running ta http://127.0.0.1:${port} `)})