import Bilza, { XAlignment, YAlignment,TextTempl, CompFactory as cf } from 
"../Bilza.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";


let bil = new Bilza("bilza");
bil.resizeCanvas(1000, 400);

let grid = cf.grid();
bil.insert.alwaysOn(grid);

//---The heading
let hdg = cf.text("Main Heading","#008000");
// let hdg = TextTempl.h1("Main Heading","#008000",50,50);
hdg.showBg = true;
hdg.border = 5;
hdg.colorBorder = "yellow";
hdg.colorBg = "#008000";
hdg.color = "#ff0000";

// hdg.loc.goto(0,50,OffScreenYOpt.YTop,XAlignment.Mid);
hdg.loc.goto(0,0,0);
// hdg.loc.animate(0,1,50,50,OffScreenYOpt.YTop,3);
hdg.duration = 600;

//---Bullet point One 


bil.insert.append(hdg, hdg.duration);

////////////////////////////////////////////
bil.init();
bil.start();
