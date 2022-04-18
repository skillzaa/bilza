import Bilza from "../../src/Bilza.js";
let bil = new Bilza("bilza",500,500);
// bil.dynamicCanvas(90,90);

let rgrid = bil.add.rGrid();
rgrid.d.flagDrawNumbers = true;
rgrid.d.fontSize = 12;

let point = bil.add.textTempl.hdg("RT","#ff0000",null,0,0,10,10);
point.d.margin = 0;
point.d.xAlignment = point.xAlignmentOptions.Left;
point.d.yAlignment = point.yAlignmentOptions.Top;

let pointTwenty = bil.add.textTempl.hdg("This is twenty percent","#008000",null,10,30,40,10);
pointTwenty.d.margin = 0;
pointTwenty.d.xAlignment = point.xAlignmentOptions.Left;
pointTwenty.d.yAlignment = point.yAlignmentOptions.Top;

let point30 = bil.add.textTempl.hdg("This is Fourty percent so can streatch more and more and more and more and more","#008000",null,0,50,90,20);
point30.d.margin = 0;
point30.d.xAlignment = point.xAlignmentOptions.Left;
point30.d.yAlignment = point.yAlignmentOptions.Top;

//////////////////////////////////
bil.start();
