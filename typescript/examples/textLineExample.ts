
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Triangle from "../components/triangle/triangle.js";
import Text from "../components/text/text.js";
import {Clip} from "../bilzaa2d/index.js";
import QuadraticCurveTo from "../pureComps/quadraticCurveTo.js";

let b = new Bilzaa2d();
b.background.color = "whitesmoke";

console.log("b",b);

b.start();