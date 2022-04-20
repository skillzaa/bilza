import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js";

let bil = new Bilza("bilza",600,300);
// bil.dynamicCanvas(90,90);

// let rgrid = bil.add.rGrid();
// rgrid.d.flagDrawNumbers = true;
// rgrid.d.fontSize = 12;
bil.add.bgShapes();
let jt = bil.add.textTempl.jt(0,60,"Jumbo Tron","yellow","green");

// let pointTwenty = bil.add.textTempl.hdg("This is twenty percent","#008000",null,10,30,40,10);
// pointTwenty.d.margin = 0;
// pointTwenty.d.xAlignment = point.xAlignmentOptions.Left;
// pointTwenty.d.yAlignment = point.yAlignmentOptions.Top;

// let point30 = bil.add.textTempl.hdg("This is Fourty percent so can streatch more and more and more and more and more","#008000",null,0,50,90,20);
// point30.d.margin = 0;
// point30.d.xAlignment = point.xAlignmentOptions.Left;
// point30.d.yAlignment = point.yAlignmentOptions.Top;

//////////////////////////////////
bil.draw();
