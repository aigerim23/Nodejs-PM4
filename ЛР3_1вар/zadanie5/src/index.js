let path = require('path');

let configPath = path.join(__dirname, '..', 'config', 'app.json');
console.log(configPath);
console.log(path.basename(configPath));
console.log(path.extname(configPath));
