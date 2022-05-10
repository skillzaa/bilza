import Bilza from "../00lib/Bilza_0_0_15.js";
// import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60,1000,500);
bil.background.color = "#ffff00";
bil.add.circle(0,300,15,10,10,"#008000",true);
//////////////////////////////////
bil.draw();
///////////////////////////////
let inter = setInterval(function(){    
bil.add.circle(0,300,
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    10,
    "#008000",
    true);
bil.draw();
},500);