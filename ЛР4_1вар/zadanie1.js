let fs = require('fs');
let path = require('path');

let dataDir = path.join(__dirname, 'data');
let inventoryFile = path.join(dataDir, 'inventory.txt');

try {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }
    fs.writeFileSync(inventoryFile, 'Название товара: Количество');
    console.log('Папка и файл созданы');
} catch (err) {
    console.log(err.message);
}
