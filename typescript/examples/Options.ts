import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import IconAdv from "../corecomps/icons/iconAdv.js";
import Style from "../bilzaa2d/style/style.js";
import {UTFIcons} from "../corecomps/icons/utfIcons.js";
let b = new Bilzaa2d();
b.background.color = "black";

let incom = new Style();
incom.fillStyle = "red";
incom.strokeStyle = "green";
incom.lineWidth = 10;
incom.fontSize = 80;
// crossSword
let l1 = new IconAdv(UTFIcons.HeavyCheckMark, 100, 100, incom);
l1.backgroundColor = "crimson";
l1.iconColor = "yellow";
b.add_comp(l1);
console.log("b", b);
b.start();
