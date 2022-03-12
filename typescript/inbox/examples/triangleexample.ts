
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js.js";
import Triangle from "../../components/triangle/triangle.js";
import QuadraticCurveTo from "../pureComps/quadraticCurveTo.js";

let b = new Bilzaa2d();
b.background.color = "whitesmoke";
let tri = new Triangle();
tri.d.showVertexMarker = false;
tri.d.lineColorAB ="red";
tri.d.lineColorBC ="red";
tri.d.lineColorCA ="red";
// tri.d.data.
b.add(tri);
// let qa = new QuadraticCurveTo();
// b.add(qa);

// let l = new Line();
// b.add(l);
console.log("b",b);

b.start();