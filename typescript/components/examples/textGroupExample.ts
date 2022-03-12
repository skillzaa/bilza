
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import TextGroup from "../containers/textGroup/textGroup.js";


let b = new Bilzaa2d();

let f = new TextGroup("This is an example text line");
f.d.fontSize = 40;
f.d.x = 1;
f.d.y = 1;
f.underline(0);
f.underline(1);
f.underline(2);
f.underline(3);
// f.setFontSize("is",140);
// f.setFontSize("example",140);
f.setFontColor("This","red");
f.setFontColor("is","green");
f.setFontColor("an","purple");
f.setFontColor("example","blue");
f.setFontColor("text","grey");
f.setFontColor("line","brown");
b.add_comp(f);

console.log("b",b);

b.start();