'use strict';
const $ = function (foo) {
    return document.getElementById(foo);
}
const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}

const freeze = function (e) {
    let i = e.target.id.charAt(e.target.id.length - 1)
    if (frozen[i]) {
        e.target.style.backgroundColor = 'white';
        frozen[i] = false;
    } else {
        e.target.style.backgroundColor = 'lightblue';
        frozen[i] = true;
    }
};

const rollm = function () {
    let dicedivs = document.getElementsByClassName('die');
    for (let i = 0; i < NOOFDICE; ++i) {
        if (!frozen[i]) {
            let r = roll(6); 
            dicedivs[i].innerHTML = r;
            dice[i] = r;               // record the play?
        }
    }
}

const play = function () {
        if (++plays % PLAYS !== 0) {
            console.log('regular');
            rollm();
        } else {
            console.log('record force, record');
            rollm();
            record();   
        }
};

/*
 * Scoring et cetera
 */
const record = function () {
                                  
    magic = [0, 0, 0, 0, 0, 0, 0];      // do the magic
    for (let i = 0; i < NOOFDICE; ++i) {
        magic[dice[i]]++;
        magic[0] += dice[i];
    }
    
    btn.removeEventListener('click', play);
    btn.style.backgroundColor = 'pink';
    console.log('kilroy was here, scoring');
    makeScorePadSensitive();
    setTimeout( function () {
        btn.addEventListener('click', play);
        btn.style.backgroundColor = 'white';
        }, 3000);
};

const handler = function (e) {
    let j = e.target.id.charAt(e.target.id.length - 1); // get index for magic
    $(e.target.id).innerHTML = magic[j] * j;
    makeScorePadInSensitive();
    resetFreeze();
};

const makeScorePadInSensitive = function () {
    console.log('kilroy was here remove');
    for (let i = 0; i < 6; ++i) {
        $('p' + (i + 1)).removeEventListener('click', handler);
    }
};

const makeScorePadSensitive = function () {
    console.log('kilroy was here make');
    for (let i = 0; i < 6; ++i) {
        let s = 'p' + (i + 1);
        if ($(s).innerHTML == '') {
            $(s).addEventListener('click', handler);
        }
    }
};

const makeDie = function (i) {
    let die = document.createElement('div');
    die.setAttribute('class', 'die');
    die.setAttribute('id', 'n'+i);
    die.addEventListener('click', freeze);
    return die;
};

const makeButton = function (text, handler) {
    let btn = document.createElement('button');
    let txt = document.createTextNode(text);
    btn.appendChild(txt);
    btn.addEventListener('click', handler);
    return btn;
};

const doThis = function () {            // handler for load-event
    for (let i = 0; i < NOOFDICE; ++i) {
        $('diceCup').appendChild(makeDie(i));
    }
    btn = makeButton('Roll', play);
    $('main').appendChild(btn);
    btn1 = makeButton('Score', record);
    $('main').appendChild(btn1);
    $('cpryear').innerHTML = `&copy; nml ${new Date().getFullYear()}`;
    play();   
}

/*
 *  Above, all the functions were declared, they are all 'global'
 *  Here we definer some simpler variables/constants that need
 *  to be global
 */
const NOOFDICE = 5;
const PLAYS = 3;
let magic = [];
let plays = 0;
let dice = [];
let frozen = [];
let btn;
let btn1;
for (let i = 0; i < NOOFDICE; ++i) {
    dice.push(0);
    frozen.push(false);
}

window.addEventListener('load', doThis);