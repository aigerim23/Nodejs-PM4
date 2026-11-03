// let name = process.argv[2];
// let age = process.argv[3];
// console.log(process.argv);

// global.setTimeout(() => {
//     console.log('Привет!!!!!!!');
// }, 2000);

// console.log(process.version);
// console.log(process.platform);

// console.log('Начало');
// process.exit();
// console.log('это не пишется');


// console.log('hello');
// setTimeout(() =>{
//     console.log("hello 2");
// }, 3000);
// console.log("hello 3");

// const add = require('./math');
// console.log(add(2, 3));

// const {add, multiply} = require("./math");
// console.log(add(2, 3));
// console.log(multiply(2, 3));

// const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.freemem());
// console.log(os.totalmem());



// const chalk = require('chalk');

// console.log(chalk.green('Успех!'));
// console.log(chalk.red('Ошибка!'));
// console.log(chalk.yellow('Предупреждение!'));
// console.log(chalk.blue.bold('Информация!'));



const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];

console.log(_.reverse([...numbers]));
console.log(_.sum([numbers]));
console.log(_.max([numbers]));
console.log(_.shuffle(numbers));