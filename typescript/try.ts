import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "./bilza.js";

setInterval(function(){
/////////////////////////////--set interval
let bil = new Bilza("bilza",70);
bil.background.color.set("#000000");
//-----------------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const counter = cf.frameCounter("#ff0000");
bil.insert.alwaysOn(counter);

for (let i = 0; i < 200; i++) {

        const circle = cf.circle(5,hsl(getRandom(0,360)));
        //--This will just draw the boundry
        circle.filled.set(false);
        circle.lineWidth.set(2);
        circle.x.set(getRandom(1,100));
        circle.y.set(getRandom(1,100));
        bil.insert.add(circle,0,20);
}
//-------------------------------
// const ui = new Ui(bil); //not required for this example
bil.draw();
////////////////////////////--set interval ends
},1000);
