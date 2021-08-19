// Objects in JS
// Dictionaries in PYTHON

let id = {
    firstName: 'Imam Mahbir',
    lastName: 'Afraz',
    age: 15,
    height: "5'9",
}
let fullName = `${id.firstName} ${id.lastName}`
console.log('Student ID: \n');
console.log(`Fullname: ${fullName}`);
console.log(
    `Firstname: ${id.firstName}\nLast name: ${id.lastName}\nAge: ${id.age}\nHeight: ${id.height}`
);

id.age++;
id.height = "5'10";
console.log(`\nFullname: ${fullName}`);
console.log(
    `Firstname: ${id.firstName}\nLast name: ${id.lastName}\nAge: ${id.age}\nHeight: ${id.height}`
);