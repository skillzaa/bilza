// import Bilza from "../00lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";
let bil = new Bilza("bilza",1000,500);
// let g = bil.gridTempl.simple();
let g = bil.add.grid("#0000ff");

let c = bil.insert(bil.add.counter());

let txt00 = bil.add.text(2,"Start Time 00","#008000",10,10,30,30);
let txt01 = bil.add.text(2,"Start Time 02","#008000",10,10,30,30);
let txt02 = bil.add.text(2,"Start Time 04","#008000",20,10,30,30);
let txt03 = bil.add.text(2,"Start Time 06","#008000",30,10,30,30);

//     txt.displayType = txt.displayTypeOptions.Append;

 bil.insert(txt00); 
 bil.insert(txt01); 
 bil.insert(txt02); 
 bil.insert(txt03); 


//////////////////////////////////
bil.start();
///////////////////////////////
