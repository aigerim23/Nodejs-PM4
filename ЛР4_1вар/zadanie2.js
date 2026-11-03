let fs = require('fs');
let path = require('path');

let inventoryFile = path.join(__dirname, 'data', 'inventory.txt');

try {
    let content = fs.readFileSync(inventoryFile, 'utf8');
    if (content.trim() === '') {
        console.log('Инвентарь не инициализирован');
    } else {
        console.log(content);
    }
} catch (err) {
    console.log('Инвентарь не инициализирован');
}
