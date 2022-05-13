// import {IComponent,Pack} from "../Bilza.js";
// //--components
// import Text from "../components/text/text.js";
// import Grid from "../components/grid/grid.js";
// // import RGrid from "../components/grid/grid.js";
// import FillRect from "../components/fillRect/fillRect.js";
// import Rect from "../components/rect/rect.js";
// import Image from "../components/image/image.js";
// import Counter from "../components/counter/counter.js";
// import Line from "../components/line/line.js";
// import Circle from "../components/circle/circle.js";

// // import BgShapes from "../components/bgShapes/bgShapes.js";
// // import List from "../components/list/list.js";
// // import Lines from "../components/lines/lines.js";
// // import SlideHL from "../components/slideHL/slideHL.js";
// // import SlideHP from "../components/slideHP/slideHP.js";
// //-----------composit componenets
// // import TextComp from "../composites/textComp/textComp.js";
// //---Templates 

// export default class CompFactory {

// constructor(){

// }

// text(duration:number= 10,content :string="",colorHax :string="#000000",x:number=0,y:number =0,dynWidth :number=20,dynHeight :number=20):Text {
// let bs = new Text(duration,content,colorHax,x,y,dynWidth,dynHeight);
//     return bs;        
// }
// grid(colorHax :string="#000000",cellWidthPerc :number=10,cellHeightPerc :number=10){
// let g = new Grid(colorHax,cellWidthPerc,cellHeightPerc);
//     return g;
// }
// counter(duration :number = 10,loc :string = "rb"){
//     let item = new Counter(duration,loc);
//     return item;
// }
// rect(startTime :number=0,duration:number=300,x :number=0, y :number=0,widthPercent :number=10, heightPercent :number=10,colorHex :string = "#008000"){
//     let bs = new Rect(duration,x, y,widthPercent, heightPercent,colorHex);
//     return bs;        
// }
// fillRect(startTime :number=0,duration:number=10,x :number=0, y :number=0,widthPercent :number=10, heightPercent :number=10,colorHex :string = "#008000"){
//     let bs = new FillRect(duration,x, y,widthPercent, heightPercent,colorHex);
//     return bs;        
// }
// Image(duration:number=10,imgId :string,x :number=0, y:number=0){
//     let bs = new Image(duration,imgId,x,y);
//     return bs;        
// }
// line(duration:number=300, x1 :number=0, y1 :number=0,x2:number=100,y2:number=100,color:string="black",lineWidth:number=2){
//     let bs = new Line(duration, x1,y1,x2,y2,color,lineWidth);
//     return bs;        
// }
// circle(duration:number=10,x :number=0,y :number=0,radiusPercent :number = 10,color:string="grey",fill :boolean=true, startAngle :number=0,endAngle :number=2 * Math.PI){
//     let item = new Circle(duration,x,y,radiusPercent,color,fill,startAngle,endAngle);
//     return item;
// }


// // slideHL(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,contentHdg :string="The Title",themeColor :string="#00ff37") {
// //     let bs = new SlideHL(startTimeSeconds,endTimeSeconds,contentHdg,themeColor);
// //     
// //     return bs;        
// // }
// // slideHP(startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,contentHdg :string="The Title",themeColor :string="#00ff37") {
// //     let bs = new SlideHP(startTimeSeconds,endTimeSeconds,contentHdg,themeColor);
// //     
// //     return bs;        
// // }
// // bgShapes(count:number=100) {
// //     let bs = new BgShapes();
// //     
// //     return bs;        
// // }

// // lines(x :number=0,y:number=0){
// //     let bs = new Lines(x,y);
// //     
// //     return bs;        
// // }

// // list(msStart=0,msEnd= Number.MAX_SAFE_INTEGER ,x=10,y=10,widthPerc =80):List{
// // let bs = new List(msStart,msEnd,x,y,widthPerc);
// //     
// //     return bs;    
// // }

// // rGrid(msStart :number =0, msEnd :number = Number.MAX_SAFE_INTEGER){
// //     let g = new RGrid(msStart, msEnd);
// //     
// //     return g;
// // }



// }///compFactory