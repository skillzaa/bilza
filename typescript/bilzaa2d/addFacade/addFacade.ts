import {IDrawable,Component} from "../../index.js";
import Text from "../../components/text/text.js";
import Grid from "../../components/grid/grid.js";
import FrameCounter from "../../components/frameCounter/frameCounter.js";
import Circle from "../../components/circle/circle.js";
import AddTextTemplates from "./addTextTemplates.js";
import RandomBgShapes from "../../components/randomBgShapes/randomBgShapes.js";
export default class AddFacade {
private addToArray :IDrawable[];
textTempl :AddTextTemplates;

constructor(comps :IDrawable[]){
this.addToArray = comps;
this.textTempl = new AddTextTemplates(comps);
}

text(content :string ="..!", frameStart :number =0, frameEnd :number = 5000):Text{
    let bs = new Text();
    bs.frameStart = frameStart;
    bs.frameEnd = frameEnd;
    bs.d.content = content;
    this.addToArray.push(bs);
    return bs;    
}
grid(){
    let g = new Grid();
    this.addToArray.push(g);
    // g.d.colorNumbers = "red";
    // g.styleNumber.fillStyle = "red";
    // g.d..lineWidth = 1;
    // g.fontSize = 15;
    // g.styleLine.strokeStyle = "#dee1e2";
    // g.styleLine.fillStyle = "green";
    // g.styleLine.fontSize = 2;
    // g.styleLine.lineWidth = 1;
    // g.styleLine.lineDashWidth = 15;
    // g.styleLine.lineDashGap = 5;
    g.frameStart = 0;
    g.frameEnd = 5000;
    return g;
}
frameCounter(x :number=100,y :number=100){
    let item = new FrameCounter();
    item.d.x = x;
    item.d.y = y;
    this.addToArray.push(item);
}
circle(x :number=100, y :number=100){
    let item = new Circle();
    item.d.x = x;
    item.d.y = y;
    this.addToArray.push(item);
}
randomBgShapes(){
    let item = new RandomBgShapes();
    this.addToArray.push(item);
}
}