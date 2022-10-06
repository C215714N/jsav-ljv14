const 
    timer = d.querySelector('#time p');
    btnStart = d.querySelector('#time button'),
    btnEnd = d.querySelector('#time button:last-child');
let s = 0;
let m = 0;
let h = 0;

let startTime;

function addTime (){
    s < 59 ? s++ : s = 0;
    m < 59 && s == 0 ? m++ : s == 0 ? m = 0 : m;
    m == 0 && s == 0 ? h++ : h
    timer.innerHTML = `
        ${h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
}

function restartTime(){
    alert(`Felicitaciones: tu tiempo fue ${timer.innerHTML}`);
    timer.innerHTML = `HH:mm:ss`;
    s = 0; m = 0; h = 0;
}

btnStart.addEventListener('click', () => {
    startTime = setInterval(addTime, 10)
} );

btnEnd.addEventListener('click', () => {
    clearInterval(startTime);
    restartTime();
}   )