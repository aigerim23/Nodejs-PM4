let path = require('path');

let fileName = process.argv[2];
let filePath = path.join(__dirname, 'files', fileName);
console.log(filePath);
