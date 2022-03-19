import {IDrawable} from "../../index.js";
//--components
import Text from "../../components/text/text.js";
import Grid from "../../components/grid/grid.js";
import FrameCounter from "../../components/frameCounter/frameCounter.js";
import Circle from "../../components/circle/circle.js";
import RandomBgShapes from "../../components/randomBgShapes/randomBgShapes.js";

//---Templates
import AddTextTemplates from "./addTextTemplates.js";

export default class AddFacade {
private addToArray :IDrawable[];
textTempl :AddTextTemplates;

constructor(comps :IDrawable[]){
this.addToArray = comps;
this.textTempl = new AddTextTemplates(comps);
}
//(DataFn :()=>T,msStart=0,msEnd= Number.MAX_SAFE_INTEGER)
text(content :string ="text",fontColor="black",msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50):Text{
    // let bs = new Text();
let bs = new Text(content,fontColor,msStart, msEnd,x,y);
    this.addToArray.push(bs);
    return bs;    
}
grid(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER){
    let g = new Grid(msStart, msEnd);
    this.addToArray.push(g);
    return g;
}
frameCounter(x :number=100,y :number=100,msEnd :number = Number.MAX_SAFE_INTEGER){
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