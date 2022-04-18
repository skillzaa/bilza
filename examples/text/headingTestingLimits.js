import Bilza from "../../src/Bilza.js";
let bil = new Bilza("bilza");
bil.dynamicCanvas(90,90);
let g = bil.add.gridTempl.dashed();

let leftTop = bil.add.textTempl.hdg("LT","#ff0000",null,0,0);
leftTop.d.xAlignment = leftTop.xAlignmentOptions.Left;

let rightTop = bil.add.textTempl.hdg("RT","#ff0000",null,100,0);
rightTop.d.xAlignment = rightTop.xAlignmentOptions.Right;

let leftBot = bil.add.textTempl.hdg("LB","#ff0000",null,0,100);
leftBot.d.xAlignment = leftBot.xAlignmentOptions.Left;
leftBot.d.yAlignment = leftBot.yAlignmentOptions.Bot;

let rightBot = bil.add.textTempl.hdg("RB","#ff0000",null,100,100);
rightBot.d.xAlignment = rightBot.xAlignmentOptions.Right;
rightBot.d.yAlignment = rightBot.yAlignmentOptions.Bot;

let midMid = bil.add.textTempl.hdg("MD","#ff0000",null,50,50);
midMid.d.xAlignment = midMid.xAlignmentOptions.Mid;
midMid.d.yAlignment = midMid.yAlignmentOptions.Mid;

//////////////////////////////////
bil.start();
