'use strict';


const trigger = document.getElementById('trigger');
const targetImg = document.getElementById('target');
const picA = 'picA.jpg';
const picB = 'picB.jpg';

trigger.addEventListener('mouseenter', () => {
    targetImg.src = picB;
});

trigger.addEventListener('mouseleave', () => {
    targetImg.src = picA;
});
