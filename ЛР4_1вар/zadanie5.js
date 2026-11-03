let fs = require('fs');
let path = require('path');

let dataDir = path.join(__dirname, 'data');
let tempFile = path.join(dataDir, 'temp_log.txt');
let inventoryFile = path.join(dataDir, 'inventory.txt');
let finalFile = path.join(dataDir, 'inventory_final.txt');

try {
    if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
    }
    fs.renameSync(inventoryFile, finalFile);
    console.log('Готово');
} catch (err) {
    console.log(err.message);
}
