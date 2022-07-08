// import {Component,Pack,Style,Transition,Position } from "../../bilzaa2d/index.js";
// import Dot from "../../inbox/pureComps/dot.js";
// import Line from "../../inbox/pureComps/line.js";

// import DataFn , {TriangleData} from "./DataFn.js";

// export default class Triangle extends Component {
    
// private  compData:Transition<TriangleData>;
// private    styleLine:Style;
// private    styleVertexMarker:Style;
//             d:TriangleData;
// constructor (){
//     super();
//     this.compData = new Transition(DataFn);
//     this.d = this.compData.data;
//     this.styleLine = new Style();
//     this.styleVertexMarker = new Style();
// }
// width( p: Pack ): number {
// return 100;
// }
// height(p: Pack): number {
// return 200;

// }
// draw(p: Pack): boolean {
// this.drawLine(p,this.d.a,this.d.b,this.d.lineWidthAB,this.d.lineColorAB);
// this.drawLine(p,this.d.b,this.d.c,this.d.lineWidthBC,this.d.lineColorBC);
// this.drawLine(p,this.d.c,this.d.a,this.d.lineWidthCA,this.d.lineColorCA);
// //--vertex markerS 
// if (this.d.showVertexMarker == true){
// this.drawVertexMarker(p,this.d.a.x,this.d.a.y,this.d.vertexMarkerAColor);
// this.drawVertexMarker(p,this.d.b.x,this.d.b.y,this.d.vertexMarkerBColor);
// this.drawVertexMarker(p,this.d.c.x,this.d.c.y,this.d.vertexMarkerCColor);
// }

// //----------------------------------

// //----------------------------------
// return true;
// }

// private drawVertexMarker(p :Pack,x:number,y:number,color:string,){
//     let pos = new Position();

//     let dot1 = new Dot(color,10);
//     dot1.pos.x = x - dot1.radius;    
//     dot1.pos.y = y - dot1.radius;    
//     dot1.draw(p);    
// }
// private drawLine(p :Pack,start:Position,end :Position,lineWidth :number,color:string){
//     let l = new Line();
//     l.start = start;
//     l.end = end;
//     l.lineWidth = lineWidth;
//     l.color = color;
//     l.draw(p);
// }
// update(frame: number, p: Pack): boolean {
// // this.d.apply(frame); //--important!!
// return true;    
// }

// }