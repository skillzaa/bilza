import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";

let bil = new Bilza("bilza", 70);

const fc = cf.frameCounter(hsl(60,50,30));
fc.goto(0,20,0);
bil.insert.alwaysOn(fc);

/////////////////////////////////////////////////////
const msg = TextTempl.h1("Heading One",hsl(240));
bil.insert.add(msg,0,20);
const txt = TextTempl.footNote("Welcome",hsl(240));
bil.insert.add(txt,0,20);
const txt2 = TextTempl.megatron("Megatron Slide",hsl(240));
bil.insert.add(txt2,0,20);
/////////////////////////////////////////////////////
const ui = new Ui(bil);
bil.draw(); //-------------------------------------//
/////////////////////////////////////////////////////
