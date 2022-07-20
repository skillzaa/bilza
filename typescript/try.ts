import Bilza, { Ui,CompFactory as cf ,hsl} from "./bilza.js";


let bil = new Bilza("bilza",70);

bil.insert.alwaysOn(cf.grid());
//-----------------------------------------
const row = cf.row("Half the success is showing up");

// row.xAlign = row.XAlignOpt.Right;
// row.yAlign = row.YAlignOpt.Bot;

row.goto(0,10,10);

row.showBackground.set(true);

row.colorBackground.set(hsl(120,100,25));
row.border.set(3);
row.colorBorder.set(hsl(0));

row.paddingLeft.set(5);
row.paddingRight.set(5);
row.paddingTop.set(5);
row.paddingBottom.set(5);

bil.insert.add(row,0,50);
// // //--------------------------------------------
const cell02 = row.getCell(1);
// // cell02.content.set("milk");
cell02.showBackground.set(true);
cell02.colorBackground.set("pink");
// cell02.colorBackground.random(2,10,20);
cell02.color.random(2,10,20);
//--------------------------------------------
// row.x.animate(2,10,50,100);
// row.y.animate(2,10,20,100);
const ui = new Ui(bil);
bil.draw();

// // console.log(bil.comps);


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