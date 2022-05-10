// import {Component,Pack,DrawLayer } from "../../Bilza.js";
// import DataFn,{ObjectData} from "./DataFn.js";
// import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
// import Text from "../text/text.js";

// export default class Para extends Component<ObjectData> {
// lines :Text[];

// constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="#00ff37")
// {
//     super(DataFn);
//     //------------------------------
//     this.lines = [];
//     this.drawLayer = DrawLayer.MiddleGround;
//     this.setStartTime(startTimeSeconds * 1000); //into mili sec
//     this.setEndTime(endTimeSeconds * 1000);
//         if (content !== ""){
//             this.addLine(content); // was missing
//         }    
// }

// addLine(content :string){
// let item = new Text(this.getStartTime(),this.getEndTime(), content,"#0000ff");   
// this.lines.push(item);
// return item; 
// }

// width(p:Pack):number {
// let finl = 0;
// for (let i = 0; i < this.lines.length; i++) {
//     const line = this.lines[i];
//     let lineWd = line.width(p);
//     if (lineWd > finl) { finl = lineWd}   
// }
// return finl;
// }
// height(p:Pack):number {
//     let finl = 0;
//     for (let i = 0; i < this.lines.length; i++) {
//         const line = this.lines[i];
//         let lineHt = line.height(p);
//          finl += lineHt + this.d.listGapFactor
//         }   
// return finl;
// }

// update(msDelta: number, p: Pack): boolean {
//     for (let i = 0; i < this.lines.length; i++) {
//         const element = this.lines[i];
//         element.applyTransition(msDelta);

//     }
//     return true;
// }

// draw(p:Pack):boolean{
//     this.drawBg(p)    
// this.drawBorder(p);
// // this.style.strokeStyle = this.d.fontColor;
// // this.style.fillStyle = this.d.fontColor;
// let y = this.d.y; // the para Y
//         for (let i = 0; i < this.lines.length; i++) {
//             this.lines[i].d.x = this.d.x;
//             this.lines[i].d.y = y;
//             this.lines[i].d.color = this.d.colorFont;
//             this.lines[i].d.maxDisplayChars = this.d.maxDisplayCharsPerLine;
//             this.lines[i].draw(p);
//             let ht = this.lines[i].height(p); 
//             // y +=  this.lines[i].d.heightPercent + this.d.listGapFactor;
//         }        
// return true;
// }
// drawBorder(p :Pack) :boolean{          
//     this.style.lineWidth = this.d.border;    
//     this.style.strokeStyle = this.d.colorBorder;    
//     this.style.fillStyle = this.d.colorBorder;    
//     p.drawRect(
//         p.xPerc(this.d.x),
//         p.yPerc(this.d.y),
//         this.width(p),
//         this.height(p),
//         this.style);
//     return true;
// }
// drawBg(p :Pack) :boolean{
//     this.style.strokeStyle = this.d.colorBg;    
//     this.style.fillStyle = this.d.colorBg;           
// p.drawFillRect(
//     p.xPerc(this.d.x),
//     p.yPerc(this.d.y),
//     this.width(p),
//     this.height(p),
//     this.style);
// return true;
// }
// }//class