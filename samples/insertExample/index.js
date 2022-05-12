//  import Bilza from "./00lib/Bilza_0_0_15.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",1000,500);

let g = bil.add.grid("#0000ff");

let c = bil.insert(bil.add.counter());

getTxt(0,30,0,"Start Time 0 sec duration 30 sec Ends at 30 sec");
getTxt(5,5,10,"Start Time 5 sec duration 5 sec Ends at 10 sec");
getTxt(10,10,15,"Start Time 10 sec duration 10 sec Ends at 20 sec");


 function getTxt(startTime,duration,y,content){
let txt = bil.add.text(duration,content,"#008000",10,y,50,50);
txt.setStartTime(startTime);
txt.insertType = txt.insertTypeOptions.Insert;
txt.xAlignment = txt.xAlignmentOptions.Mid; 
txt.yAlignment = txt.yAlignmentOptions.Mid; 
bil.insert(txt);
return txt;    
 }
//////////////////////////////////
bil.start();
///////////////////////////////   