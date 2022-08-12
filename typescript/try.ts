// import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";
import AniNumber from "./animationModule/aniNumber/aniNumber.js";

const no = new AniNumber(10);
no.set(50);
no.goto(1000,10);
no.goto(2000,20);
no.goto(3000,30);
no.goto(4000,40);

//-------------------------------//
no.update(500);
console.log("update-500=50",no.value());

no.update(1000);
console.log("update-1000=10",no.value());
no.update(1500);
console.log("update-1500=still10",no.value());

no.update(2000);
console.log("update-2000=20",no.value());

no.update(3000);
console.log("update-3000=30",no.value());
no.update(3999);
console.log("update-3999= still 30",no.value());

no.update(4000);
console.log("update-4000=40",no.value());

no.animate(5000,10000,0,100);

no.update(5000);
console.log("anim-5000=0",no.value());

no.update(7500);
console.log("anim-7500-mid-=50",no.value());

no.update(10000);
console.log("anim-10000=100",no.value());
