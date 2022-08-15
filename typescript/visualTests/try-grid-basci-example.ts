import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "../bilza.js";

let bil = new Bilza("bilza", 70);
const grid = cf.grid( hsl(240) );

grid.xRotate = grid.XAlignOpt.Mid;
grid.yRotate = grid.YAlignOpt.Mid;

grid.x.set(10);
grid.y.set(10);
grid.width.set(20);
grid.height.set(20);

grid.width.animate(2,10,20,80);
grid.height.animate(11,20,20,80);

grid.rotation.animate(21,30,0,4 * 360)
bil.insert.add(grid,0,60);


const ui = new Ui(bil);
bil.draw();


