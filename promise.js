let mypromise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("delayed for 3 seconds");
    }, 3000);
    resolve();
});

console.log(1)
mypromise.then(() => {
    console.log("promise fulfilled");
});

setTimeout(() => {
    console.log(2)
}, 500);
console.log(3)
