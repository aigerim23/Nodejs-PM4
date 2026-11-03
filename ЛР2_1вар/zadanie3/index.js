let os = require('os');

console.log(os.platform());
console.log(os.hostname());
console.log(os.homedir());
console.log((os.totalmem() / (1024 ** 3)).toFixed(2) + ` ГБ`);
