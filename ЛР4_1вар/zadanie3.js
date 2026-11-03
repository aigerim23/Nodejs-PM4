let fs = require('fs');
let path = require('path');

function addItem(item) {
    let inventoryFile = path.join(__dirname, 'data', 'inventory.txt');
    try {
        fs.writeFileSync(inventoryFile, '\n' + item, { flag: 'a' });
        console.log(`Добавлено: ${item}`);
    } catch (err) {
        console.log(err.message);
    }
}

addItem('Монитор: 10');
