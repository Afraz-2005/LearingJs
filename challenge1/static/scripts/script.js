//Selectors and listeners
document.querySelector(".btn-1").addEventListener('click', ageInDays);
document.querySelector(".btn-2").addEventListener('click', reset);

//global variables
let date = new Date();
let year = date.getFullYear();
let birthYear;
let textAnswer;


function ageInDays(){
    birthYear = prompt("Enter your birth year: ");
    let age_in_days = (year - birthYear) * 365;
    textAnswer = `You are ${age_in_days} days old`;
    checkNegative();
    document.getElementById("result").innerHTML = textAnswer;
    console.log(age_in_days);
}

function reset(){
    document.location.reload();
}

function checkNegative(){
    birthYear;
    if (birthYear > year) {
        textAnswer = `Invalid input! it's ${year} now`;
    }
    if (birthYear == "") {
        console.log('Empty input from user');
    }
}
