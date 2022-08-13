import Bilza, { Ui, CompFactory as cf, hsl } from "./bilza.js";

let bil = new Bilza("bilza", 70);


bil.insert.alwaysOn(cf.grid(hsl(60, 50, 30)));
bil.insert.alwaysOn(cf.frameCounter(hsl(60, 50, 30)));

const fill = cf.fillRect(hsl(30));
// fill.xAlign = fill.XAlignOpt.Mid;
// fill.yAlign = fill.YAlignOpt.Mid;

fill.x.set(50);
fill.y.set(50);
// fill.y.set(50);

fill.width.set(10);
fill.height.set(10);

fill.x.animate(1000,5000,50,0);
fill.x.goto(6000,50);
fill.setResponsiveCoordinates(true);
bil.insert.add(fill, 0, 700);


const ui = new Ui(bil);
// bil.init();
bil.draw();