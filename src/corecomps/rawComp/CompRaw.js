"use strict";
// import {BaseComp,Pack,Style } from "../../bilzaa2d/index.js";
// import RawData from "./rawData.js";
// import RawDataNull from "./rawDataNull.js";
// export default class CompRaw extends BaseComp {
//     dataTransitions : RawDataNull[];
//     compData:RawData;
// constructor (content="some text",x=0,y=0,style = new Style()){
//     super(style);
//     this.compData = new RawData();
//     this.compData.content = content;
//     this.compData.x = x;
//     this.compData.y = y;
//     this.compData.content = content; 
//     this.compData.x = x; 
//     this.compData.y = y; 
//     this.dataTransitions = [];
// }
// width( p: Pack ): number {
// return p.chars_width(this.compData.content);
// }
// height(p: Pack): number {
// return p.chars_width("Xi");    
// }
// draw(p: Pack): boolean {
//     // p.drawBackground("green");
// let x = this.xy.X(this.compData.x,this.width(p),p.canvasWidth())
// let y = this.xy.Y(this.compData.y,this.height(p),p.canvasHeight())
//     p.drawText(this.compData.content,x,y,this.style);
//     return true;
// }
// newDataTransition(frame :number=0):RawDataNull{
// let t = new RawDataNull(frame);
// this.dataTransitions.push(t);
// return t;
// }
// addDataTransition(cd :RawDataNull):boolean{
// this.dataTransitions.push(cd);
// return true;
// }
// applyDataTransitons(frame :number){
// for (let i = this.dataTransitions.length -1; i >= 0; i--) {
//     const trctxData = this.dataTransitions[i];
//     if(trctxData.frameStart < frame ){
//         this.merge(trctxData);
//         this.dataTransitions.splice(i,1);
//     }
// }
// }
// //--this merge is only for compData for style ithas its own merge fn.
// merge(subset:RawDataNull):boolean{
// if (subset.content !== null){
//     this.compData.content = subset.content;
// }
// if (subset.x !== null){
//     this.compData.x = subset.x;
// }
// if (subset.y !== null){
//     this.compData.y = subset.y;
// }
// return true;
// }
// }
