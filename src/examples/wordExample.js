import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Word from "../components/text/text.js";
let b = new Bilzaa2d();
let f = new Word("Example");
f.fontSize = 40;
f.x = 1;
f.y = 1;
f.underline = true;
f.overline = true;
// f.highlight = true;
// f.highlightColor = "black";
f.fontSize = 100;
f.x = 10;
f.y = 10;
f.fontColor = "yellow";
f.underlineColor = "blue";
f.underlineWidth = 10;
f.overlineWidth = 10;
f.overlineColor = "red";
b.add_comp(f);
console.log("b", b);
b.start();
