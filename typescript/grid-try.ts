import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza", 70);
// bil.resizeCanvas(800,400);
const g = cf.grid();
// g.width.set(100);
// g.height.set(100);
// g.x.set(50);
// g.y.set(50);
// g.showBackground.set(true);
// g.colorBackground.set("pink");
// g.xRotate = g.XAlignOpt.Mid;
// g.yRotate = g.YAlignOpt.Mid;
// g.xAlign = g.XAlignOpt.Mid;
// g.yAlign = g.YAlignOpt.Mid;
// g.goto(0,50,50);
// g.paddingLeft.set(0);
// g.paddingTop.set(1);
// g.paddingRight.set(1);
// g.paddingBottom.set(1);

// g.y.set(10);
g.showNumbers.set(false);
// g.width.set(25);
// g.height.set(25);
// g.border.set(2);
g.colorHorizontalLines.set("red");
g.colorVerticalLines.set("blue");

// g.rotation.animate(2,10,0,2000);
// g.width.animate(0,5,10,80);
// g.height.animate(0,5,10,80);
bil.insert.add(g,0,60);

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