import {IDrawable} from "../../index.js";
//--components
import Text from "../text/text.js";
import Grid from "../grid/grid.js";
import FrameCounter from "../frameCounter/frameCounter.js";
import Circle from "../circle/circle.js";
import RandomBgShapes from "../randomBgShapes/randomBgShapes.js";
import List from "../list/list.js";
//---Templates 
import AddTextTemplates from "./addTextTemplates.js";

export default class CompFactory {
private addToArray :IDrawable[];
textTempl :AddTextTemplates;

constructor(comps :IDrawable[]=[]){
this.addToArray = comps;
this.textTempl = new AddTextTemplates(comps);
}

text(content :string="",fontColor :string="black",fontSize=40,
msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50)
:Text{
let bs = new Text(content,fontColor,fontSize,msStart,msEnd,x,y);
    this.addToArray.push(bs);
    return bs;    
}
list(x=10,y=10,fontSize=30,msStart=0,msEnd=80000):List{
let bs = new List(x,y,fontSize,msStart,msEnd);
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

spit(){return this.addToArray;}
}