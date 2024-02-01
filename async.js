//function first() {
//return new Promise((resolve) => {
//setTimeout(() => {
//resolve("delated for 3 seconds");
// }, 3000);
//});
//}

async function myAsyncFunct() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const ditto = await response.json();
    return ditto.id;
}

console.log(1)
let pokemon = await myAsyncFunct()
console.log(pokemon)
console.log(2)
