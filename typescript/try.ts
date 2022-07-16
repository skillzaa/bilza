import Bilza, { Ui,CompFactory as cf } from "./bilza.js";



let bil = new Bilza("bilza",70);
bil.background.color.set("#000000");
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
bil.insert.alwaysOn(counter);

const plain = cf.pic("./house.jpg",80,80);
plain.y.set(10);
plain.xAlign = plain.XAlignOpt.Right;
plain.x.animate(0,10,0,100);
bil.insert.add(plain,0,15);
const ui = new Ui(bil);
bil.draw();

// let count = 0;
// const inter = setInterval(function(){
//     g.paddingLeft.set(count);
//     g.paddingTop.set(count);
//     bil.draw();
//     count +=1;
//     if (count > 30){
//         clearInterval(inter);
//     }
// },1000);