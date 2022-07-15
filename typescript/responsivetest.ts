import Bilza, { Ui,CompFactory as cf } from "./bilza.js";
let bil = new Bilza("bilza",70);
// bil.resizeCanvas(800,300);
//-----------------------------------------
// const grid = cf.staticGrid(50,50,"grey");
const grid = cf.grid("grey");
grid.goto(0,90,0);
bil.insert.alwaysOn(grid);

const txt = cf.fillRect("green");

// txt.showBackground.set(true);
// txt.colorBackground.set("green");
txt.width.set(20);
txt.height.set(20);
// txt.responsiveCoordinates = false;
// txt.responsivePadding = false;
txt.paddingLeft.set(50);
txt.showBackground.set(true);
txt.colorBackground.set("pink");
txt.goto(0,10,50);


bil.insert.add(txt,0,50);
const ui = new Ui(bil);
bil.draw();