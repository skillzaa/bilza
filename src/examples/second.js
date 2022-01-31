import Bilzaa2d from "../index.js";
import shadowText from "../textThemes/textShadow.js";
let b = new Bilzaa2d();
let t = b.addText("In The Name of Allah");
t.addTransition(shadowText(5, 20, 20));
b.start();
