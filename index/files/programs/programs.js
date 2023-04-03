

let progressBar = document.querySelector('.progress-circle');
let valueContainer = document.querySelector(".percentage");

let progressValue = 0;
let progressEndValue = 54;
let speed= 35;

let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
        #aac7ee ${progressValue * 3.6}deg,
        #0a2344 ${progressValue * 3.6}deg
        
        )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
        console.log(progressValue);
}, speed);



let progressBar2 = document.querySelector('.progress-circle2');
let valueContainer2 = document.querySelector(".percentage2");

let progressValue2 = 0;
let progressEndValue2 = 57;
let speed2= 35;

let progress2 = setInterval(() => {
    progressValue2++;
    valueContainer2.textContent = `${progressValue2}%`;
    progressBar2.style.background = `conic-gradient(
        #aac7ee ${progressValue2 * 3.6}deg,
        #0a2344 ${progressValue2 * 3.6}deg
        
        )`;
        if (progressValue2 == progressEndValue2) {
            clearInterval(progress2);
        }
        console.log(progressValue2);
}, speed2);

let progressBar3 = document.querySelector('.progress-circle3');
let valueContainer3 = document.querySelector(".percentage3");

let progressValue3 = 0;
let progressEndValue3 = 100;
let speed3= 35;

let progress3 = setInterval(() => {
    progressValue3++;
    valueContainer3.textContent = `${progressValue3}%`;
    progressBar3.style.background = `conic-gradient(
        #aac7ee ${progressValue3 * 3.6}deg,
        #0a2344 ${progressValue3 * 3.6}deg
        
        )`;
        if (progressValue3 == progressEndValue3) {
            clearInterval(progress3);
        }
        console.log(progressValue3);
}, speed3);

let progressBar4 = document.querySelector('.progress-circle4');
let valueContainer4 = document.querySelector(".percentage4");

let progressValue4 = 0;
let progressEndValue4 = 100;
let speed4= 35;

let progress4 = setInterval(() => {
    progressValue4++;
    valueContainer4.textContent = `${progressValue4}%`;
    progressBar4.style.background = `conic-gradient(
        #aac7ee ${progressValue4 * 3.6}deg,
        #0a2344 ${progressValue4 * 3.6}deg
        
        )`;
        if (progressValue4 == progressEndValue4) {
            clearInterval(progress4);
        }
        console.log(progressValue4);
}, speed4);

let progressBar5 = document.querySelector('.progress-circle5');
let valueContainer5 = document.querySelector(".percentage5");

let progressValue5 = 0;
let progressEndValue5 = 56;
let speed5= 35;

let progress5 = setInterval(() => {
    progressValue5++;
    valueContainer5.textContent = `${progressValue5}%`;
    progressBar5.style.background = `conic-gradient(
        #aac7ee ${progressValue5 * 3.6}deg,
        #0a2344 ${progressValue5 * 3.6}deg
        
        )`;
        if (progressValue5== progressEndValue5) {
            clearInterval(progress5);
        }
        console.log(progressValue5);
}, speed5);

let progressBar6 = document.querySelector('.progress-circle6');
let valueContainer6 = document.querySelector(".percentage6");

let progressValue6 = 0;
let progressEndValue6 = 57;
let speed6= 35;

let progress6 = setInterval(() => {
    progressValue6++;
    valueContainer6.textContent = `${progressValue6}%`;
    progressBar6.style.background = `conic-gradient(
        #aac7ee ${progressValue6 * 3.6}deg,
        #0a2344 ${progressValue6 * 3.6}deg
        
        )`;
        if (progressValue6 == progressEndValue6) {
            clearInterval(progress6);
        }
        console.log(progressValue6);
}, speed6);

let progressBar7 = document.querySelector('.progress-circle7');
let valueContainer7 = document.querySelector(".percentage7");

let progressValue7 = 0;
let progressEndValue7 = 51;
let speed7= 35;

let progress7 = setInterval(() => {
    progressValue7++;
    valueContainer7.textContent = `${progressValue7}%`;
    progressBar7.style.background = `conic-gradient(
        #aac7ee ${progressValue7 * 3.6}deg,
        #0a2344 ${progressValue7 * 3.6}deg
        
        )`;

        if (progressValue7 == progressEndValue7) {
            clearInterval(progress7);
        }
        console.log(progressValue7);
}, speed7);

let progressBar8 = document.querySelector('.progress-circle8');
let valueContainer8 = document.querySelector(".percentage8");

let progressValue8 = 0;
let progressEndValue8 = 48;
let speed8= 35;

let progress8 = setInterval(() => {
    progressValue8++;
    valueContainer8.textContent = `${progressValue8}%`;
    progressBar8.style.background = `conic-gradient(
        #aac7ee ${progressValue8 * 3.6}deg,
        #0a2344 ${progressValue8 * 3.6}deg
        
        )`;
        if (progressValue8 == progressEndValue8) {
            clearInterval(progress8);
        }
        console.log(progressValue8);
}, speed8) 
