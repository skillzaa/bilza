import Bilza, { Ui, CompFactory as cf, hsl} from "./bilza.js";

let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");

bil.insert.alwaysOn(grid);

const txt = cf.fillRect(hsl(240));
txt.x.set(40);
txt.y.set(20);
//--if we start animation from frame 0 it will overwrite x.set and y.set
txt.x.animate(2, 6, 80, 0);
txt.x.goto(10, 10);
txt.x.goto(15, 20);
txt.x.goto(20, 30);
txt.x.goto(25, 40);
txt.x.goto(30, 50);
txt.x.goto(35, 60);
txt.y.goto(40, 20);
txt.y.goto(45, 30);
txt.y.goto(50, 40);
txt.y.goto(55, 50);
txt.y.goto(60, 60);
txt.y.goto(65, 70);
bil.insert.add(txt, 0, 80);
const ui = new Ui(bil);
bil.draw();
// console.log("txt", txt);
