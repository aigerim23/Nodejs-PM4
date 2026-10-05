let fs = require('fs');
let path = require('path');

let dataDir = path.join(__dirname, 'data');

try {
    fs.writeFileSync(path.join(dataDir, 'categories.txt'), '');
    fs.writeFileSync(path.join(dataDir, 'suppliers.txt'), '');

    let files = fs.readdirSync(dataDir);
    console.log(`Файлов: ${files.length}`);
    files.forEach(file => {
        console.log(file);
    });
} catch (err) {
    console.log(err.message);
}
