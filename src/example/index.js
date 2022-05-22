import Bilza from "../Bilza.js";
import Rect from "../components/rect/rect.js";
let bil = new Bilza("bilza");
let tst = new Rect();
tst.duration = 600;
tst.p.widthDyn.animate(2, 4, 0, 200);
bil.insert.append(tst, tst.duration);
bil.init();
bil.start();
