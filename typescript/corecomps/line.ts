// import Pack from "../bilzaa2d/pack/pack.js";
// import Component from "../bilzaa2d/baseComp.js";
// import Xy from "../bilzaa2d/design/xy.js.js";
// import {Cornor} from "../bilzaa2d/design/cornor.js";
// import Style from "../bilzaa2d/style/style.js";

// export default class Line extends Component {
//     startX:number;
//     startY:number;
//     endX:number;
//     endY:number;
// constructor (startX:number,startY:number,endX:number,endY:number,incomTempl:Style){
//     super();
//     this.startX = startX;
//     this.startY = startY;
//     this.endX = endX;
//     this.endY = endY;
//     this.style.merge(incomTempl);
// }
// width(p:Pack):number {
//     return this.endX - this.x;
// }
// height(p:Pack):number {
//     return this.endY - this.y;
// }


// draw(p:Pack):boolean{
// let x = this.xy.X(this.x,this.width(p),p.canvasWidth())
// let y = this.xy.Y(this.y,this.height(p),p.canvasHeight())
// p.draw_line(this.startX,this.startY,this.endX,this.endY,this.style);    
// return true;
// }

// }