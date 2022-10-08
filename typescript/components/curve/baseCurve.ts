// import Pack from "../../pack/pack.js";
// import checkZeroToHundred from "../../functions/checkZeroToHundred.js";

// import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animationsFacade/animationsDb.js";
// import toPix from "../../functions/toPix.js";


// import Arc from "./curve.js";
// import ICurve from "./ICurve.js";

// export default class BaseCurve implements ICurve {

//    startX            : AniNumberDb;
//    startY            : AniNumberDb;
//    midX              : AniNumberDb;
//    midY              : AniNumberDb;
//    endX              : AniNumberDb;
//    endY              : AniNumberDb;
//    lineWidth         : AniNumberDb;
//    bracketWidth      : AniNumberDb;
//    showBracket       : AniBooleanDb;
//    colorBracket      : AniColorDb;

// //---
// private _canvasWidth :number;
// private _canvasHeight :number;

// constructor(canvasWidth :number,canvasHeight :number,  startX :number ,startY :number,midX :number,midY :number,endX :number,endY :number, color:string="black"){

// this._canvasWidth = canvasWidth;  
// this._canvasHeight = canvasHeight;    
    
// checkZeroToHundred(startX);
// checkZeroToHundred(startY);
// checkZeroToHundred(midX);
// checkZeroToHundred(midY);
// checkZeroToHundred(endX);
// checkZeroToHundred(endY);
// // this.y.set(0);

// this.startX      = new AniNumberDb(startX);
// this.startY      = new AniNumberDb(startY);
// this.midX        = new AniNumberDb(midX);
// this.midY        = new AniNumberDb(midY);
// this.endX        = new AniNumberDb(endX);
// this.endY        = new AniNumberDb(endY);
// this.lineWidth   = new AniNumberDb(1);
// this.bracketWidth   = new AniNumberDb(2);
// this.showBracket   = new AniBooleanDb(true);
// this.colorBracket   = new AniColorDb("yellow");

// ///////////////////////////////////
// } 
 
// compWidth(): number {
// const wd = this.rightMost().value() -this.leftMost().value() 
// return toPix(wd,this.canvasWidth());
// }
// compHeight(): number {
// const ht = this.bottomMost().value() -this.topMost().value() 
// return toPix(ht,this.canvasHeight());
// }


// leftMost():AniNumberDb{
// const smaller =  (this.startX.value() < this.midX.value()) 
// ? this.startX : this.midX; 

// const left =  (smaller.value() < this.endX.value()) 
// ? smaller : this.endX; 
// return left;
// }
// rightMost():AniNumberDb{
// const larger =  (this.startX.value() > this.midX.value()) 
// ? this.startX : this.midX; 

// const large =  (larger.value() > this.endX.value()) 
// ? larger : this.endX; 
// return large;
// }
// topMost():AniNumberDb{ //top most is the smaller bot is largest
// const topper =  (this.startY.value() < this.midY.value()) 
// ? this.startY : this.midY; 

// const top =  (topper.value() < this.endY.value()) 
// ? topper : this.endY; 
// return top;
// }
// bottomMost():AniNumberDb{ //larger one 
// const topper =  (this.startY.value() > this.midY.value()) 
// ? this.startY : this.midY; 

// const top =  (topper.value() > this.endY.value()) 
// ? topper : this.endY; 
// return top;
// }

// canvasWidth(){
//   return this._canvasWidth;  
// }
// canvasHeight(){
//   return this._canvasHeight;  
// }
// /////////////////////////////

// }