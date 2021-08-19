let cars = ['BMW', 'lamborghini', 'Ferrari', 'Audi', 'Tesla'];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.log("\n");

// array methods

console.log(`To string:\n ${cars.toString()}`);

console.log(`Joined: \n ${cars.join(' - ')}`);

cars[0] = 'Mercedes-Benz';
console.log(cars.pop(), cars);
console.log(cars.push('Pagani'), cars);
cars[cars.length] = 'Toyota'; // same as push
console.log(cars.toString())
cars.shift(); // removes first element from an array
console.log(cars.toString());
cars.unshift('Honda');
console.log(cars.toString()); // first element from an array

let animes = ['naruto', 'jojo', 'deathnote', 'tokyo ghouls', 'Aot'];
let allStuff = cars.concat(animes);

console.log(`\nAll Objects: ${allStuff.toString()}`);
console.log(`Sliced: ${allStuff.slice(1, 6).toString()}`);
console.log(`Reversed: ${allStuff.reverse().toString()}`);
console.log(`Sorted: ${allStuff.sort().toString()}`);

let numArray = [5, 2, 10, 3, 45, 22, 5, 20, 65, 55, 20];
console.log(`\nNumber Array  ${numArray.toString()}`);

console.log(`Sorted in accending order: ${numArray.sort((a, b) => {
    return a - b;
}).toString()}`)//sorted in accending order

console.log(`Sorted in descending order: ${numArray.sort((a, b) => {
    return b - a;
}).toString()}`) //sorted in descending order


// for-loop to push elements to your array
let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(`\npushed numebrs to an empty array: ${emptyArray.toString()}`);
console.log(`sorted in ascending order: ${emptyArray.sort((a, b) => {return a - b})}`);
console.log(`sorted in descending order: ${emptyArray.sort((a, b) => {return b - a})}`);