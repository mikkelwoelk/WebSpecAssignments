const doThis = function () {
    let firstNum = window.prompt('write a number');
    let secondNum = window.prompt('write another number');
    let thirdNum = window.prompt('write one more number');

    if (firstNum > secondNum && thirdNum){
        console.log('1st is the highest number:' + ' ' + firstNum);
    } else if (secondNum > thirdNum && firstNum){
        console.log('2nd is the highest number:' + ' ' + secondNum);
    } else {
        console.log('3rd is the highest number:' + ' ' + thirdNum);
    }
}

document.addEventListener('DOMContentLoaded', doThis);