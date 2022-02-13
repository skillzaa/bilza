import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Triangle from "../components/triangle/triangle.js";
let b = new Bilzaa2d();
b.background.color = "black";
let tri = new Triangle();
// tri.d.data.showVertexMarker = false;
// tri.d.data.
b.add(tri);
// let dot = new Dot("crimson",200);
// b.add(dot);
// let l = new Line();
// b.add(l);
console.log("b", b);
b.start();
