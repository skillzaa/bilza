import Bilza from "../../src/Bilza.js";
import Text from "../../src/components/text/text.js";
import Para from "../../src/components/para/para.js";

let bil = new Bilza("bilza",600,300);

bil.add.bgShapes();
let jt = bil.add.textTempl.jt(0,60,"Jumbo Tron","yellow","green");
// let h1 = bil.add.textTempl.h1(0,60,"Heading One","yellow","black");
// let li = bil.add.textTempl.li(0,60,"This is li","black","yellow");

// let p = new Para(0,100,"abc");
// p.d.y = 30;
// p.d.x = 10;
// p.d.border = 1;
// p.d.colorBorder = "blue";
// p.shadowsOn();
// // p.d.fontColor = "white";
// bil.insert(p);
// p.addLine("Water gives you a healthy start because it helps in");
// p.addLine("proper circulation of nutrients and flush out toxins");


bil.draw();
