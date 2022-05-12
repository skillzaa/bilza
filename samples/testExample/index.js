//  import Bilza from "../00lib/Bilza_0_0_15.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("bilza",1000,500);

let g = bil.add.grid("#0000ff");

let c = bil.insert(bil.add.counter());

getInsertText(0,10,0,"Start Time 0 sec duration 10 sec Ends at 10 sec--Vid len 10");
getAppendText(0,10,10,"This is appended text start at 10 ends at 20");
// getInsertText(5,7,10,"Start Time 5 sec duration 7 sec Ends at 12 sec");
// getInsertText(10,10,15,"Start Time 10 sec duration 10 sec Ends at 20 sec");
// getInsertText(25,15,25,"Start Time 22 sec duration 15 sec Ends at 40 sec");
// getInsertText(25,15,30,"video length extended to 40sec");


function getInsertText(startTime,duration,y,content){
let txt = bil.add.text(duration,content,"#008000",10,y,50,50);
txt.setStartTime(startTime);
txt.insertType = txt.insertTypeOptions.Insert; //INSERT
txt.xAlignment = txt.xAlignmentOptions.Mid; 
txt.yAlignment = txt.yAlignmentOptions.Mid; 
bil.insert(txt);
return txt;    
 }
function getAppendText(startTime,duration,y,content){
let txt = bil.add.text(duration,content,"#008000",10,y,50,50);
txt.setStartTime(startTime);
txt.insertType = txt.insertTypeOptions.Append; //Append
txt.xAlignment = txt.xAlignmentOptions.Mid; 
txt.yAlignment = txt.yAlignmentOptions.Mid; 
bil.insert(txt);
return txt;    
 }
//////////////////////////////////
bil.start();
///////////////////////////////   