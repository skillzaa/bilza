import Bilza from "../Bilza.js";
import TestComp from "../testComp/testComp.js";
import StaticGrid from "../components/staticGrid/staticGrid.js";
let bil = new Bilza("bilza");
let tst = new TestComp("New");
let grid = new StaticGrid();
grid.cellWidth = 100;
grid.flagDrawNumbers = true;
grid.fontSize = 25;
tst.duration = 15;
tst.p.x.animate(0, 1, 0, 900);
bil.insert.append(tst, tst.duration);
bil.insert.alwaysOn(grid);
bil.init();
bil.start();
