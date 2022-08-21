import Bilza, { Ui, CompFactory as cf, hsl} from "./bilza.js";

let bil = new Bilza("bilza", 70);
const grid = cf.grid("grey");

bil.insert.alwaysOn(grid);

const fill = cf.fillRect(hsl(240));
fill.align(1,1);
//--By default responsive padding is off
fill.setRespPadding(true);

fill.x.set(50);
fill.y.set(50);
fill.showBackground.set(true);
fill.colorBackground.set(hsl(60));
fill.width.set(50);
fill.height.set(50);
fill.border.set(15);

fill.paddingLeft.animate(1,5,0,20);
fill.paddingLeft.animate(6,10,20,0);
//------------
fill.paddingRight.animate(11,15,0,20);
fill.paddingRight.animate(16,20,20,0);
//------------
fill.paddingTop.animate(21,25,0,20);
fill.paddingTop.animate(26,30,20,0);
//------------
fill.paddingBottom.animate(31,35,0,20);
fill.paddingBottom.animate(36,40,20,0);
//------------

bil.insert.add(fill, 0, 60);
const ui = new Ui(bil);
bil.draw();
