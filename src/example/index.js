import Bilza from "../Bilza.js";
import Rect from "../components/rect/rect.js";
let bil = new Bilza("bilza");
let tst = new Rect();
tst.duration = 60;
tst.props.y = 20;
tst.p.x.xAlign = tst.p.x.xAlignmentOptions.Mid;
tst.p.x.setValue(50);
bil.insert.append(tst, tst.duration);
bil.init();
bil.start();
let wd = 10;
let inter = setInterval(function () {
    tst.lineWidth += 1;
    wd++;
}, 1000);
