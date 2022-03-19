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

text(content :string ="..!", msStart :number =0, msEnd :number = 60000):Text{
    let bs = new Text();
    bs.setStart(msStart);
    bs.setEnd(msEnd);
    bs.d.content = content;
    this.addToArray.push(bs);
    return bs;    
}
grid(){
    let g = new Grid();
    this.addToArray.push(g);
    // item.d.colorNumbers = "red";
    // g.styleNumber.fillStyle = "red";
    // g.d..lineWidth = 1;
    // g.fontSize = 15;
    // g.styleLine.strokeStyle = "#dee1e2";
    // g.styleLine.fillStyle = "green";
    // g.styleLine.fontSize = 2;
    // g.styleLine.lineWidth = 1;
    // g.styleLine.lineDashWidth = 15;
    // g.styleLine.lineDashGap = 5;
    g.setStart(0);
    g.setEnd(60000);
    return g;
}
frameCounter(x :number=100,y :number=100){
    let item = new FrameCounter();
    item.d.x = x;
    item.d.y = y;
    item.setEnd(60000);
    this.addToArray.push(item);
}
circle(x :number=100, y :number=100){
    let item = new Circle();
    item.d.x = x;
    item.d.y = y;
    item.setEnd(60000);
    this.addToArray.push(item);
}
randomBgShapes(){
    let item = new RandomBgShapes();
    this.addToArray.push(item);
}
}