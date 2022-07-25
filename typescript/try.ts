import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";

let bil = new Bilza("bilza", 70);
//-----
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
/////////////////////////////////////////////////////
const txt = cf.rawText("Hellow World",hsl(240));
txt.x.set(30);
txt.y.set(30);
txt.width.oscillate(0,60,20,100,.15);
bil.insert.add(txt,0,30);
/////////////////////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////
