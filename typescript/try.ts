import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";
import Emotions from "./components/emotions.js";

let bil = new Bilza("bilza", 70);
//-----
const fc = cf.frameCounter();
fc.goto(0,90,0)
bil.insert.alwaysOn(fc);

const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
/////////////////////////////////////////////////////
const emogi = new Emotions("../images/emotions.png",72,72);
// emogi.x.animate(2,20,0,100);

// emogi.showBackground.set(true);
emogi.colorBackground.set("pink");
emogi.gotoImage(1,1,1);
emogi.gotoImage(2,2,2);
emogi.gotoImage(3,3,3);
emogi.gotoImage(4,4,4);
emogi.gotoImage(5,5,5);
emogi.gotoImage(6,6,6);
emogi.gotoImage(7,7,7);
emogi.gotoImage(8,8,8);
emogi.gotoImage(9,9,9);
emogi.gotoImage(10,10,10);
// emogi.row.set(2);
// emogi.column.set(5);
// emogi.row.goto(5,2);
// emogi.column.goto(5,2);
bil.insert.add(emogi,0,30);
/////////////////////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////

