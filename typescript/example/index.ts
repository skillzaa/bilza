import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

import TestComp from "../components/testComp.js";
import PlainText from "../components/plainText.js";
import UiElmGen from "../ui/uiElmGen.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter();
counter.goto(0,90,0);
bil.insert.alwaysOn(counter);

const plain = new PlainText("Plain Text");
plain.goto(0,0,50);

plain.x.animate(1,10,0,90);
bil.insert.add(plain,0,15);
const ui = new Ui(bil);

setInterval(()=>{
bil.draw();
},500);
//--------------------------------------

// const parentDiv = document.getElementById("parentDiv") as HTMLDivElement;

// if (parentDiv == null){throw new Error("parentDiv not found");}

// const uiGen = new UiElmGen(parentDiv);
// uiGen.numberInput("borderWidth",0,plain,"border");
// uiGen.hr();
// //--------
// uiGen.label("Text Color");
// uiGen.hr();
// uiGen.colorPicker("cx",plain, "color");
// uiGen.hr();
// //--------------
// uiGen.label("Text Background Color");
// uiGen.hr();
// uiGen.colorPicker("abc",plain, "colorBg");
// uiGen.hr();
// //--------------
// uiGen.label("Canvas Background Color");
// uiGen.hr();
// uiGen.colorPicker("abc",bil.background, "color");
