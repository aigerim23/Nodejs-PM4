let a = 1;

let counter = setInterval(() =>{
    console.log(a);
    if (a === 5) {
        clearInterval(counter);
        process.exit();
    }
    a++;
}, 1000);
