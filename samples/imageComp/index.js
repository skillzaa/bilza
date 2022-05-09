// import Bilza from "../00lib/Bilza_0_0_13.js";
import Bilza from "../../src/Bilza.js";

let bil = new Bilza("bilza",60,1000,500);
// let g = bil.gridTempl.simple();
let g = bil.add.grid(0,60000,"grey");

// let screamImage = document.getElementById("screamImage");
// screamImage.style.display = "none";


let img = bil.add.Image(0,300,"screamImage",50,50);

// console.log("img",screamImage.clientWidth);

img.d.xAlignment = img.xAlignmentOptions.Mid;
img.d.yAlignment = img.yAlignmentOptions.Mid;
//////////////////////////////////
bil.draw();
///////////////////////////////
