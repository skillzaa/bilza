// import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";
import AniNumber from "./animationModule/aniNumber/aniNumber.js";


const no = new AniNumber(10);
no.set(50);
no.goto(2000,20);
no.goto(2500,25);
no.goto(2600,26);
no.goto(2601,27);
// working fine
no.animate(1000,6000,0,100);
// const basefilter = no.getBaseFilter(3000);
console.log("no",no);
//-------------------------------
// no.update(500);
// console.log("update-500",no.value());
// no.update(1000);
// console.log("update-1000=0",no.value());

// no.update(3500);
// console.log("update-3500=50",no.value());

// no.update(6000);
// console.log("update-6000-100",no.value());


// console.log("basefilter",basefilter);