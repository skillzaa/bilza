import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import IconAdv from "../corecomps/icons/iconAdv.js";
import Text from "../corecomps/text/text.js";
import Style from "../bilzaa2d/style/style.js";
import { UTFIcons } from "../corecomps/icons/utfIcons.js";
let b = new Bilzaa2d();
b.background.color = "black";
let incom = new Style();
incom.fillStyle = "red";
incom.strokeStyle = "green";
incom.lineWidth = 10;
incom.fontSize = 80;
let x = 0;
let y = 0;
for (let i = 0; i < 5; i++) {
    let l1 = new IconAdv(UTFIcons.HeavyCheckMark, x, y, incom);
    let t = new Text("The message", x + 10, y);
    t.style.fillStyle = "yellow";
    y += 10;
    l1.backgroundColor = "crimson";
    l1.iconColor = "yellow";
    b.add_comp(l1);
    b.add_comp(t);
}
console.log("b", b);
b.start();
