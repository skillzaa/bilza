import Bilza, { Ui, CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza", 70);
bil.resizeCanvas(800, 300);
bil.background.color.set("#06114f");
const counter = cf.frameCounter("#ff0000");
bil.insert.alwaysOn(counter);
const cirPar = cf.circleParticles(30, "yellow", 40);
cirPar.x.set(50);
cirPar.y.set(50);
cirPar.goto(0, 50, 50);
cirPar.width.set(50);
cirPar.height.set(50);
cirPar.showBackground.set(true);
cirPar.colorBackground.set("red");
cirPar.xAlign = cirPar.XAlignOpt.Mid;
cirPar.yAlign = cirPar.YAlignOpt.Mid;
cirPar.xRotate = cirPar.XAlignOpt.Mid;
cirPar.yRotate = cirPar.YAlignOpt.Mid;
cirPar.circle.width.set(15);
cirPar.width.animate(2, 10, 50, 100);
cirPar.width.animate(12, 20, 100, 50);
cirPar.rotation.animate(25, 35, 0, 1000);
cirPar.circle.opacity.set(50);
bil.insert.add(cirPar, 0, 40);
const ui = new Ui(bil);
bil.draw();
