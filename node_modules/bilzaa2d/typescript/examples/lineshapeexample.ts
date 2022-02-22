
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Position from "../bilzaa2d/design/Position.js";
import FrameCounter from "../components/frameCounter/frameCounter.js";
import Lines from "../containers/lines/lines.js";
import dashedGrid from "../components/grid/dashedGrid.js";

let b = new Bilzaa2d();
b.background.color = "DarkSlateBlue";
let dg = dashedGrid();
let fc = new FrameCounter();
fc.x = 90;
fc.y = 90;
b.add(fc);


let pos:Position[] = [];
pos.push(new Position(5,5));
pos.push(new Position(300,5));
pos.push(new Position(300,200));
pos.push(new Position(5,200));
let lines =  new Lines(pos);
b.add(lines);

b.start();

