import Bilza, { Ui,CompFactory as cf } from "../bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,350);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
counter.goto(0,20,20);
bil.insert.alwaysOn(counter);

const title = cf.plainText("Plain Text:Demo animate and vibrate","#0429f7");
title.goto(0,10,50);
title.fontSize.set(30);
bil.insert.add(title,0,50);

const plain = cf.plainText("Plain Text","#008000");
plain.goto(0,0,0);

plain.x.animate(1,10,0,90);
plain.y.vibrate(1,10,0,1,2);

plain.y.animate(11,20,0,90);
plain.x.vibrate(11,20,90,1,2);

plain.x.animate(21,30,90,0);
plain.y.vibrate(21,30,90,1,2);

plain.y.animate(31,40,90,0);
plain.x.vibrate(31,40,0,1,2);


bil.insert.add(plain,0,50);
const ui = new Ui(bil);
bil.draw();
