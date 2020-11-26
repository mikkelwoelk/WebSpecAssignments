const $ = function (foo) { return document.getElementById(foo); };

const cv1 = function(cv, color) {
    let myCanvas = $(cv);
    let ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#ddd';
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(50, 50, 30, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(85, 75, 30, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(115, 50, 30, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(150, 75, 30, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(185, 50, 30, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

const cv2 = function(cv, color) {
    let myCanvas = $(cv);
    let ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(0, 0, 110, 65);
    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(0, 85, 110, 65);
    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(135, 85, 165, 65);
    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(135, 0, 165, 65);


}

const cv3 = function(cv, color) {
    let myCanvas = $(cv);
    let ctx = myCanvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(0, 75, myCanvas.width, 75);

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.arc(85, 75, 50, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(-400, 75);
    ctx.arc(85, 75, 50, 0, Math.PI*1/2, true);
    ctx.closePath();
    ctx.fill();
}

const doThis = function() {
    const T = document.createTextNode("JS Testing Inheritance + imageDraw");
    $('title').appendChild(T);
    $('h1').appendChild(T);

    cv1('foo', 'silver');
    cv2('bar', 'gray');
    cv3('baz', '#eee');
}

window.addEventListener('load', doThis);