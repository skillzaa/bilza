import Bilza, { CompFactory as cf , PresetComps,Ui } from "../bilza.js";

let bil = new Bilza("bilza",70);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

let c = cf.frameCounter();
c.goto(0,90,0,c.xAlign.Right);
bil.insert.alwaysOn(c);

const hdg = PresetComps.topInHdg(0,1,"Main Heading","#0000ff",10);
bil.insert.add(hdg,0,15);


const jt01 = PresetComps.bulletPoint(1,2,"This is the bullet point sentence", "#008000",30);
bil.insert.add(jt01,0,15);

const jt02 = PresetComps.bulletPoint(3,5,"This is the bullet point sentence","#008000",50);
bil.insert.add(jt02,0,15);

const jt03 = PresetComps.bulletPoint(6,8,"This is the bullet point sentence", "#008000",70);

bil.insert.add(jt03,0,15);
///----------------
const ui = new Ui(bil);
// bil.start();
bil.init();
bil.drawFrame(0);
//--------------------------------------
