import Bilzaa2d from "../index.js";
import text01 from "../customTemplates/textTemplates/text01.js";
let b = new Bilzaa2d();
let g = b.components.addGrid();
g.show_numbers = false;

let title = b.components.addText("The Main  Heading");
title.templ = text01(0);
title.x = 30;
title.y= 10;

let l1 = b.components.addText("Left top Heading");
l1.templ = text01(0);
l1.x = 5;
l1.templ.fontSize = 40;
l1.templ.shadowOffsetX =1;
l1.templ.shadowOffsetY =1;
l1.y= 30;

let l2 = b.components.addText("Left mid Heading");
l2.templ = text01(0);
l2.x = 5;
l2.y= 50;
l2.templ.fontSize = 40;
l2.templ.shadowOffsetX =1;
l2.templ.shadowOffsetY =1;


let l3 = b.components.addText("Left mid Heading");
l3.templ = text01(0);
l3.x = 5;
l3.y= 70;
l3.templ.fontSize = 40;
l3.templ.shadowOffsetX =1;
l3.templ.shadowOffsetY =1;

let r1 = b.components.addText("Right top Heading");
r1.templ = text01(0);
r1.x = 60;
r1.templ.fontSize = 40;
r1.templ.shadowOffsetX =1;
r1.templ.shadowOffsetY =1;
r1.y= 30;

let r2 = b.components.addText("Right mid Heading");
r2.templ = text01(0);
r2.x = 60;
r2.y= 50;
r2.templ.fontSize = 40;
r2.templ.shadowOffsetX =1;
r2.templ.shadowOffsetY =1;


let r3 = b.components.addText("Right mid Heading");
r3.templ = text01(0);
r3.x = 60;
r3.y= 70;
r3.templ.fontSize = 40;
r3.templ.shadowOffsetX =1;
r3.templ.shadowOffsetY =1;




b.start();