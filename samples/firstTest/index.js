// import Bilza from "../00lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",1000,500);
// let g = bil.gridTempl.simple();
let g = bil.add.grid("#0000ff");


// let c = bil.add.counter();
let txt = bil.add.text(10,"Bla Bla","#008000",10,10,30,30);
// bil.insert(c); 
// bil.insert(g); 
 bil.insert(txt); 
// bil.insert(txt02); 
// bil.insert(txt03); 

// function txt(duration,content,x=0,y=0,startTime=0){
//     let txt = bil.add.text(duration,content,"#008000",x,y);
//     txt.displayType = txt.displayTypeOptions.Append;
//     txt.setStartTime(startTime);
//     txt.displayType = txt.displayTypeOptions.Insert;

// return txt;
// }


//////////////////////////////////
bil.start();
///////////////////////////////
