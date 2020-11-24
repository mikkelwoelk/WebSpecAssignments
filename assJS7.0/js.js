const doThis = function () {
    let firstNum = window.prompt('write a number');
    let secondNum = window.prompt('write another number');
    let thirdNum = window.prompt('write one more number');

    if (firstNum > secondNum && firstNum > thirdNum){
        console.log('1st is the highest');
    } else if (secondNum > thirdNum && secondNum > firstNum){
        console.log('2nd is the highest');
    } else {
        console.log('3rd is the highest');
    }
}

document.addEventListener('DOMContentLoaded', doThis);