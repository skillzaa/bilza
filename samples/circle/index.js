// import Bilza from "../00lib/Bilza_0_0_14.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60,1000,500);
bil.gridTempl.simple("grey");

bil.add.circle(0,300,15,10,10,"#008000",true);
//////////////////////////////////
bil.draw();
///////////////////////////////
// let inter = setInterval(function(){    

// },50);