import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------
const grid = cf.grid("grey");
grid.goto(0,90,0);
bil.insert.alwaysOn(grid);

const fillRect = cf.fillRect("red");
// fillRect.xAlign = fillRect.XAlignOpt.Mid;
// fillRect.yAlign = fillRect.YAlignOpt.Mid;
// fillRect.xRotate = fillRect.XAlignOpt.Mid;
// fillRect.yRotate = fillRect.YAlignOpt.Mid;

fillRect.showBackground.set(true);
fillRect.colorBackground.set("green");
fillRect.width.set(20);
fillRect.height.set(20);

fillRect.goto(0,20,20);

//----transparency
// fillRect.opacity.goto(8,50);


fillRect.paddingLeft.animate(2,8,0,20);
fillRect.paddingRight.animate(10,18,0,20);
fillRect.paddingTop.animate(20,28,0,20);
fillRect.paddingBottom.animate(30,38,0,20);




bil.insert.add(fillRect,0,50);
const ui = new Ui(bil);
bil.draw();