'use strict';
let x = 2;
document.getElementById('dice').innerHTML = x;
let btn = document.getElementById('btn');

const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}

const diceRoll = function () {
    document.getElementById('dice').innerHTML = roll(6);
}

btn.addEventListener('click', diceRoll);