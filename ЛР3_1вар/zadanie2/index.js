let path = require('path');

let filePath = path.join(__dirname, 'data', 'info.txt');
console.log(filePath);
console.log(path.parse(filePath));
