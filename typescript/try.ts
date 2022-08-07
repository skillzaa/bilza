import Bilza, { Ui,CompFactory as cf,hsl } from "./bilza.js";

let bil = new Bilza("bilza", 70);
const grid = cf.grid( hsl(240) );
grid.x.set(20);
grid.y.set(20);
grid.width.set(50);
grid.height.set(50);

bil.insert.add(grid,0,60);

const ui = new Ui(bil);
bil.draw();


