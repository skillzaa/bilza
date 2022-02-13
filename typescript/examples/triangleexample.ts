
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Triangle from "../components/triangle/triangle.js";


let b = new Bilzaa2d();
b.background.color = "black";
let tri = new Triangle();
// tri.d.data.showVertexMarker = false;
// tri.d.data.
b.add(tri);

console.log("b",b);

b.start();