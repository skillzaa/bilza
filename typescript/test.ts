import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
// const hue = Math.floor(Math.random() * 360);
// const sat = Math.floor(Math.random() * 101);
// const light = Math.floor(Math.random() * 101);
// bil.background.color = `hsl(${hue},${sat}%,${light}%)`;
// bil.background.color.goto(3,"red");
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const plain = cf.fillRect("green");

bil.insert.add(plain,0,20);
const ui = new Ui(bil);
bil.draw();