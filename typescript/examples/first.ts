
import {Bilzaa2d,Text} from "../index.js";

let b = new Bilzaa2d("bilzaa");
let t = new Text();
t.d.content = "bla bla bla" ;
t.d.x = 50 ;
t.d.y = 10 ;
t.d.fontSize = 60;
b.add(t);
   b.canvasHeight = 300;
   b.canvasWidth = 800;
   b.init();
   b.draw();
console.log(b);