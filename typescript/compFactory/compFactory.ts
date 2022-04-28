import {IComponent} from "../Bilza.js";
//--components
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
import RGrid from "../components/rGrid/rGrid.js";
import FillRect from "../components/fillRect/fillRect.js";
// import GridR from "../components/gridR/gridR.js";
import Counter from "../components/counter/counter.js";
import Circle from "../components/circle/circle.js";
import BgShapes from "../components/bgShapes/bgShapes.js";
// import List from "../components/list/list.js";
import Line from "../components/line/line.js";
import Lines from "../components/lines/lines.js";
import Rect from "../components/rect/rect.js";
import SlideHL from "../components/slideHL/slideHL.js";
import SlideHP from "../components/slideHP/slideHP.js";
//-----------composit componenets
// import TextComp from "../composites/textComp/textComp.js";
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

slideHL(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,contentHdg :string="The Title",themeColor :string="#00ff37") {
    let bs = new SlideHL(startTimeSeconds,endTimeSeconds,contentHdg,themeColor);
    this.addToArray.push(bs);
    return bs;        
}
slideHP(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,contentHdg :string="The Title",themeColor :string="#00ff37") {
    let bs = new SlideHP(startTimeSeconds,endTimeSeconds,contentHdg,themeColor);
    this.addToArray.push(bs);
    return bs;        
}
bgShapes(count:number=100) {
    let bs = new BgShapes();
    this.addToArray.push(bs);
    return bs;        
}
text(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0):Text {
let bs = new Text(startTimeSeconds,endTimeSeconds,content,color,x,y);
    this.addToArray.push(bs);
    return bs;        
}
rect(){
    let bs = new Rect();
    this.addToArray.push(bs);
    return bs;        
}
fillRect(){
    let bs = new FillRect();
    this.addToArray.push(bs);
    return bs;        
}
lines(x :number=0,y:number=0){
    let bs = new Lines(x,y);
    this.addToArray.push(bs);
    return bs;        
}

line(x1:number=0,y1:number=0,x2:number=100,y2:number=100, color:string="black",lineWidth:number=2){
    let bs = new Line(x1,y1,x2,y2,color,lineWidth);
    this.addToArray.push(bs);
    return bs;        
}

// list(x=10,y=10,fontSize=30,msStart=0,msEnd=80000):List{
// let bs = new List(x,y,fontSize,msStart,msEnd);
//     this.addToArray.push(bs);
//     return bs;    
// }
grid(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER){
    let g = new Grid(msStart, msEnd);
    this.addToArray.push(g);
    return g;
}
rGrid(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER){
    let g = new RGrid(msStart, msEnd);
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

spit(){return this.addToArray;}

}///compFactory
