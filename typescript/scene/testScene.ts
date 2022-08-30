import Bilza, {Ui, CompFactory as cf,hsl,getRandom} from "../bilza.js";

import Scene from "./scene.js";

const sce = new Scene(20);


const counter = cf.frameCounter(hsl(300));
counter.setxy(90,90);
sce.push(counter,3,15);

/////////////////////////////////////////////
const g = cf.grid();
sce.push(g,4,16); // between frame 3 and 15

const txt = cf.text("Text from scene",hsl(0));
txt.fontSize.set(120);
txt.setxy(30,30);
sce.push(txt,5,17);


/////////////////////////////
export default sce;