for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("\n");
console.log("\n");



function greetMe(greet) {
    return console.log(greet);
}

for (let i = 1; i < 4; i++) {
    console.log(i);
    console.log(greetMe("Hi Afraz"));
}
