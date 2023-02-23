let a = document.querySelectorAll(".number-1sec1") ;
let b = 2000;

 a. forEach((valueDisplay) => {
    let startVallue = 0;
    let endValue = 15;
    let duration = Math.floor(b / endValue) ;
    let counter = setInterval(function () {
     startVallue += 1;
        valueDisplay.textContent = startVallue;
        if ( startVallue == endValue ) {
            clearInterval(counter) ;
        }
    } , duration) ;
}) ;

let c = document.querySelectorAll(".number-2sec1a") ;
let d = 2000;

 c. forEach((valueDisplay) => {
    let startVallue = 0;
    let endValue = 75;
    let duration = Math.floor(d / endValue) ;
    let counter = setInterval(function () {
     startVallue += 1;
        valueDisplay.textContent = startVallue;
        if ( startVallue == endValue ) {
            clearInterval(counter) ;
        }
    } , duration) ;
}) ;
let e = document.querySelectorAll(".number-3sec1") ;
let f = 2000;

 e. forEach((valueDisplay) => {
    let startVallue = 0;
    let endValue = 35;
    let duration = Math.floor(f / endValue) ;
    let counter = setInterval(function () {
     startVallue += 1;
        valueDisplay.textContent = startVallue;
        if ( startVallue == endValue ) {
            clearInterval(counter) ;
        }
    } , duration) ;
}) ;

let g = document.querySelectorAll(".number-4sec1") ;
let h = 2000;

 g. forEach((valueDisplay) => {
    let startVallue = 0;
    let endValue = 26;
    let duration = Math.floor(h / endValue) ;
    let counter = setInterval(function () {
     startVallue += 1;
        valueDisplay.textContent = startVallue;
        if ( startVallue == endValue ) {
            clearInterval(counter) ;
        }
    } , duration) ;
}) ;
let i = document.querySelectorAll(".number-5sec1") ;
let j = 2000;

 i. forEach((valueDisplay) => {
    let startVallue = 0;
    let endValue = 16;
    let duration = Math.floor(j / endValue) ;
    let counter = setInterval(function () {
     startVallue += 1;
        valueDisplay.textContent = startVallue;
        if ( startVallue == endValue ) {
            clearInterval(counter) ;
        }
    } , duration) ;
}) ;