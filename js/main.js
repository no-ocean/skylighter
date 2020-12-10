'use strict';

const workScreen = document.querySelector(".wrapper"),
      lighter = document.querySelector(".image");
let clipPath, x, y, dY;
let radius = 80;

workScreen.addEventListener("wheel", function(event) {
    dY = event.deltaY;
    radius = radius + -dY/10;
    if (radius <= 80) {
        radius = 80;
    }
    if (radius >= 500) {
        radius = 500;
    }
    clipPath = `clip-path: circle(${radius}px at ${x}px ${y}px)`;
    lighter.setAttribute("style", clipPath);
});

workScreen.addEventListener("mousemove", function(event) {
    x = event.clientX;
    y = event.clientY;
    
    clipPath = `clip-path: circle(${radius}px at ${x}px ${y}px)`;
    lighter.setAttribute("style", clipPath);
});