const path = require('path')

console.log(path.basename(__filename));       

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.join("a","b","c"));   


console.log(path.resolve("a", "b", "c"));
