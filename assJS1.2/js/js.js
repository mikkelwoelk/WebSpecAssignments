'use strict';

// declaring variables
let btn = document.getElementById('btn');
let die = document.getElementsByClassName('dice');

//Creating an empty array
let numbers = [];

//Loops through the dices and, pushes value into the array and displays value
let diceRoll = function(i) {
    numbers = [];
    for (i = 0; i < die.length; i++){
        let number = roll();
        die[i].innerHTML = number;
        numbers.push(number);
    }
    console.log(numbers);
}

//Rolls a random number between 1 and 6
let roll = function() {
    let number = Math.floor((Math.random() * 6) + 1);
    return number;
}

btn.addEventListener('click', diceRoll);