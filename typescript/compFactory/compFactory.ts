import {IComponent} from "../Bilza.js";
//--components
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import Rectangle from "../components/rectangle/rectangle.js";
import GridR from "../components/gridR/gridR.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import RandomBgShapes from "../components/randomBgShapes/randomBgShapes.js";
import List from "../components/list/list.js";
//---Templates 
import TextTemplates from "./textTemplates.js";
import GridTemplates from "./gridTemplates.js";

export default class CompFactory {
private addToArray :IComponent[];
textTempl :TextTemplates;
gridTempl :GridTemplates;

constructor(comps :IComponent[]=[]){
this.addToArray = comps;
this.textTempl = new TextTemplates(comps);
this.gridTempl = new GridTemplates(comps);
}
rectangle(){
    let bs = new Rectangle();
    this.addToArray.push(bs);
    return bs;        
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
gridR(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER){
    let g = new GridR(msStart, msEnd);
    this.addToArray.push(g);
    return g;
}
counter(x :number=100,y :number=100,msEnd :number = Number.MAX_SAFE_INTEGER){
    let item = new Counter();
    item.d.x = x;
    item.d.y = y;
    this.addToArray.push(item);
    return item;
}
circle(x :number=100, y :number=100){
    let item = new Circle();
    item.d.x = x;
    item.d.y = y;
    this.addToArray.push(item);
    return item;
}
randomBgShapes(){
    let item = new RandomBgShapes();
    this.addToArray.push(item);
    return item;
}

spit(){return this.addToArray;}

}///compFactory
