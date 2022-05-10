// import {Component,Pack,DrawLayer } from "../../Bilza.js";
// import DataFn,{ObjectData} from "./DataFn.js";
// // import TextTemplates from "../../compFactory/textTemplates.js";
// import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
// import Text from "../text/text.js";

// let dimSeq: [number, number];
// let unDimSeq: [number, number];
// export default class SlideHL extends Component<ObjectData> {
// hdg :Text;
// lis :Text[];

// constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="The Title",color :string="#00ff37")
// {
//     super(DataFn);
//     this.hdg = new Text(startTimeSeconds,endTimeSeconds,content,color);
//     //------------------------------
//     this.hdg.d.padding = 5;
//     this.hdg.d.xAlignment = this.hdg.xAlignmentOptions.Mid;
//     this.hdg.d.yAlignment = this.hdg.yAlignmentOptions.Top;
//     this.hdg.d.colorBg = lightenDarkenColor(color,200);
//     this.hdg.d.showBg = true;
//     // this.hdg.d.dynamicFontSize = true;
//     //------------------------------
//     this.lis = [];
//     this.drawLayer = DrawLayer.MiddleGround;
//     this.setStartTime(startTimeSeconds * 1000); //into mili sec
//     this.setEndTime(endTimeSeconds * 1000);
     
// }
// // unDimSeq(itemIndex:number,TPlusSec :number){
// //     this.unDimSeqArray.push([itemIndex,TPlusSec]);
// // }
// // dimSeq(itemIndex:number,TPlusSec :number){
// //     this.dimSeqArray.push([itemIndex,TPlusSec]);
// // }
// // protected applyUnDimSeq(msDelta: number){
// // for (let i = 0; i < this.unDimSeqArray.length; i++) {
// //     const element = this.unDimSeqArray[i];
// //     if(element[1] <= (this.getLocalMsDelta(msDelta))){
// //         this.lis[element[0]].d.flagDim = false;
// //     }
// // }
// // }
// // protected applyDimSeq(msDelta: number){
// // for (let i = 0; i < this.dimSeqArray.length; i++) {
// //     const element = this.dimSeqArray[i];
// //     if(element[1] <= (this.getLocalMsDelta(msDelta))){
// //         this.lis[element[0]].d.flagDim = true;
// //     }
// // }
// // }
// // getLocalMsDelta(msDeltaGlobal :number){
// // return Math.abs(Math.ceil(msDeltaGlobal - this.getStartTime()));
// // }
// addItem(content :string, startDim:boolean=true, unDimSecond :number = 2){
// let item = new Text(this.getStartTime(),this.getEndTime(), content,"#0000ff");   
//     if (startDim == true){
//         // item.d.flagDim = true;
//         let tr = item.addTransition((unDimSecond * 1000) + this.getStartTime());
//         // tr.flagDim = false;
//     }
// this.lis.push(item);
// return item; 
// }

// width(p:Pack):number {
// return 0;
// }
// height(p:Pack):number {
// return 0;
// }

// update(msDelta: number, p: Pack): boolean {
//     for (let i = 0; i < this.lis.length; i++) {
//         const element = this.lis[i];
//         element.applyTransition(msDelta);
//     }
//     // this.applyDimSeq(msDelta);
//     // this.applyUnDimSeq(msDelta);
//     // console.log("localMsDelta",this.getLocalMsDelta(msDelta));
//     return true;
// }

// draw(p:Pack):boolean{
// this.hdg.draw(p);
// this.drawLis(p);    
// return true;
// }
// drawLis(p :Pack){
// let y = this.d.listStartY;
//         for (let i = 0; i < this.lis.length; i++) {
//             this.lis[i].d.y = y;
//             if (this.d.applyWdHtPerc == true){
//                 // this.lis[i].setDynamicFontSize(p);
//             }
//             this.lis[i].d.maxDisplayChars = this.d.maxLiChars;
//             this.lis[i].draw(p);
//             let ht = this.lis[i].height(p); 
//             // y +=  this.lis[i].d.heightPercent + this.d.listGapFactor;
//         }    
// }


// }//class