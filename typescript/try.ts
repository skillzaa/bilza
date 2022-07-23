import Bilza, { Ui,CompFactory as cf,hsl } from "./bilza.js";

let bil = new Bilza("bilza", 70);
bil.background.color.set(hsl(240,100,18));

bil.insert.alwaysOn(cf.grid(hsl(60,50,30)));
const fc = cf.frameCounter(hsl(60,50,30));
fc.goto(0,20,0);
bil.insert.alwaysOn(fc);


const fill = cf.fillRect(hsl(30));
bil.insert.add(fill,0,20);
/////////////////////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////
