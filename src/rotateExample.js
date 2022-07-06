"use strict";
const canvas = document.getElementById("bilza");
console.log("canvas", canvas);
canvas.width = 800;
canvas.height = 400;
const ctx = canvas.getContext('2d');
let rotateCounter = 0;
let x = 0;
let y = 0;
let width = 200;
let height = 200;
function draw(rotateCounter) {
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx === null || ctx === void 0 ? void 0 : ctx.save();
    ctx === null || ctx === void 0 ? void 0 : ctx.translate(width, height);
    ctx === null || ctx === void 0 ? void 0 : ctx.rotate(rotateCounter);
    ctx === null || ctx === void 0 ? void 0 : ctx.fillStyle = "blue";
    ctx === null || ctx === void 0 ? void 0 : ctx.fillRect(0 - (width / 2), 0 - (height / 2), 200, 200);
    ctx === null || ctx === void 0 ? void 0 : ctx.restore();
}
setInterval(function () {
    rotateCounter += 1;
    draw(rotateCounter * Math.PI / 180);
    console.log("rotateCounter", rotateCounter);
}, 20);
