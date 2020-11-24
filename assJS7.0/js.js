const doThis = function () {
    let firstNum = Number(prompt('write a number'));
    let secondNum = Number(prompt('write another number'));
    let thirdNum = Number(prompt('write one more number'));

    if (firstNum > secondNum && firstNum > thirdNum){
        console.log('1st is the highest number with:' + ' ' + firstNum);
    } else if (secondNum > thirdNum && secondNum > firstNum){
        console.log('2nd is the highest number with:' + ' ' + secondNum);
    } else {
        console.log('3rd is the highest number with:' + ' ' + thirdNum);
    }
}

document.addEventListener('DOMContentLoaded', doThis);