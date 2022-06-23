import Bilza, { CompFactory as cf , PresetComps,Ui } from "../Bilza.js";
import bulletPoint from "../presetComps/bulletPoint.js";



let bil = new Bilza("bilza");
bil.resizeCanvas(1000,400);
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

let c = cf.frameCounter();
c.goto(0,90,0,c.xAlign.Right);
bil.insert.alwaysOn(c);


const hdg = PresetComps.topInHdg(0,1,"Main Heading","#0000ff",10);
bil.insert.add(hdg,0,20);


const jt01 = PresetComps.bulletPoint(1,2,"This is the bullet point sentence", "#008000",30);
bil.insert.add(jt01,0,10);

const jt02 = PresetComps.bulletPoint(3,5,"This is the bullet point sentence","#008000",50);
bil.insert.add(jt02,0,10);

const jt03 = PresetComps.bulletPoint(6,8,"This is the bullet point sentence", "#008000",70);

bil.insert.add(jt03,0,10);


bil.init();
const ui = new Ui(bil);
bil.drawFrame(0);
// bil.start();
//--------------------------------------

// const slider = document.getElementById("slider");
// slider.min = 0;
// slider.max = 10;
// slider.value = 0;
// // slider.set       
// console.log("slider",slider);        
// setInterval(()=>{
//     if (bil.isRunning()==true){
//         //----@ts-expect-error 
//         slider.value = Math.ceil(bil.lastMeDelta()/1000);  
//         // console.log("Math.ceil(bil.lastMeDelta()/1000)",Math.ceil(bil.lastMeDelta()/1000));        
//     // console.log("this.slider.value",this.slider.value);
//     }
// },500);    
