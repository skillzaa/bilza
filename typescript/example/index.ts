import Bilza,{XAlignment,YAlignment,CompFactory as cf} from "../Bilza.js";

let bil = new Bilza("bilza");
bil.resizeCanvas(1000,400);
let tst = cf.rect();
tst.duration = 600;
tst.p.loc.set(0,0,XAlignment.Left,YAlignment.Top);

tst.p.dynWidth.animate(0,5,10,90);
tst.p.dynHeight.animate(0,5,10,90);
bil.insert.append(tst,tst.duration);

let grid = cf.grid();
bil.insert.alwaysOn(grid);
//--////////////////////////////-|-\\\\\\\
bil.init();
bil.start();
///////////////////////////////
