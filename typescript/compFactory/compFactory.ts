import {IComponent} from "../Bilza.js";
//--components
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
// import RGrid from "../components/grid/grid.js";
import FillRect from "../components/fillRect/fillRect.js";
// import GridR from "../components/gridR/gridR.js";
import Counter from "../components/counter/counter.js";
// import Circle from "../components/circle/circle.js";
// import BgShapes from "../components/bgShapes/bgShapes.js";
// import List from "../components/list/list.js";
// import Line from "../components/line/line.js";
// import Lines from "../components/lines/lines.js";
// import Rect from "../components/rect/rect.js";
// import SlideHL from "../components/slideHL/slideHL.js";
// import SlideHP from "../components/slideHP/slideHP.js";
//-----------composit componenets
// import TextComp from "../composites/textComp/textComp.js";
//---Templates 

export default class CompFactory {
private insert :(comp :IComponent)=>IComponent;

constructor(insert :(comp :IComponent)=>IComponent){
this.insert = insert;
}

text(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",colorHax :string="#000000",x:number=0,y:number =0,dynWidth :number=20,dynHeight :number=20):Text {
let bs = new Text(startTimeSeconds,endTimeSeconds,content,colorHax,x,y,dynWidth,dynHeight);

this.insert(bs);
    return bs;        
}
grid(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER,colorHax :string="#000000",cellWidthPerc :number=10,cellHeightPerc :number=10){
let g = new Grid(msStart,msEnd,colorHax,cellWidthPerc,cellHeightPerc);
    this.insert(g);
    return g;
}
counter(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER,loc :string = "rb"){
    let item = new Counter(msStart,msEnd,loc);
    
    this.insert(item);
    return item;
}
// rect(){
//     let bs = new Rect();
//     this.insert(bs);
//     return bs;        
// }
// fillRect(){
//     let bs = new FillRect();
//     this.insert(bs);
//     return bs;        
// }
// slideHL(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,contentHdg :string="The Title",themeColor :string="#00ff37") {
//     let bs = new SlideHL(startTimeSeconds,endTimeSeconds,contentHdg,themeColor);
//     this.insert(bs);
//     return bs;        
// }
// slideHP(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,contentHdg :string="The Title",themeColor :string="#00ff37") {
//     let bs = new SlideHP(startTimeSeconds,endTimeSeconds,contentHdg,themeColor);
//     this.insert(bs);
//     return bs;        
// }
// bgShapes(count:number=100) {
//     let bs = new BgShapes();
//     this.insert(bs);
//     return bs;        
// }

// lines(x :number=0,y:number=0){
//     let bs = new Lines(x,y);
//     this.insert(bs);
//     return bs;        
// }

// line(x1:number=0,y1:number=0,x2:number=100,y2:number=100, color:string="black",lineWidth:number=2){
//     let bs = new Line(x1,y1,x2,y2,color,lineWidth);
//     this.insert(bs);
//     return bs;        
// }

// list(msStart=0,msEnd= Number.MAX_SAFE_INTEGER ,x=10,y=10,widthPerc =80):List{
// let bs = new List(msStart,msEnd,x,y,widthPerc);
//     this.insert(bs);
//     return bs;    
// }

// rGrid(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER){
//     let g = new RGrid(msStart, msEnd);
//     this.insert(g);
//     return g;
// }


// circle(x :number=100, y :number=100){
//     let item = new Circle();
//     item.d.x = x;
//     item.d.y = y;
//     this.insert(item);
//     return item;
// }


}///compFactory
