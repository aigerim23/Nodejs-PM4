let path = require('path');

let files = ['photo.jpg', 'document.pdf', 'music.mp3', 'script.js'];

files.forEach(file => {
    console.log(path.extname(file));
    console.log(path.join(__dirname, 'uploads', file));
});
