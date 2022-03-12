
import {Bilzaa2d} from "../bilzaa2d/index.js";
import Text from "../components/components/text/text.js";
let b = new Bilzaa2d();
let t = new Text("Phase III");
t.x = 50 ;
t.y = 10 ;
t.fontSize = 60;
b.add(t);
   b.canvasHeight = 300;
   b.canvasWidth = 800;
   b.init();
   b.draw();
console.log(b);