import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Circle from "../corecomps/circle.js";
import Templ from "../design/templ.js";

let b = new Bilzaa2d();
b.background.color = "#e0f9f1";
// let g = b.components.addGrid();
// g.show_numbers = false;
let incom = new Templ();
incom.fillStyle = "yellow";
incom.strokeStyle = "red";
incom.lineWidth = 5;
incom.lineCap = "round";
let l = new Circle(10,10,100,incom);
// l.fill = false;
// let l2 = new Line(1100,100,1100,400,incom);
// let l3 = new Line(1100,400,100,400,incom);
// let l4 = new Line(100,400,100,100,incom);

b.add_comp(l);
// b.add_comp(l2);
// b.add_comp(l3);
// b.add_comp(l4);

b.start();