import AnimatedNoBase from "./AnimatedNoBase.js";
import {XAlignment} from "../../../design/xAlignment.js";
import { OffScreenXOpt } from "../../OffScreenXOpt.js";


export default class XAxis extends AnimatedNoBase{
    public readonly xAlignmentOptions:typeof XAlignment;   
    public xAlign: XAlignment;   
    private compWidth :number | null;
    private compHeight :number | null;
    //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
constructor(defaultValue :number){
    super(defaultValue );
    this.xAlignmentOptions = XAlignment; //final-ok
    this.xAlign = this.xAlignmentOptions.Left;
    this.compWidth =  null ;
    this.compHeight =  null ;
      
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(compWidth :number,compHeight :number,canvasWidth :number, canvasHeight :number): boolean {
    super.init(compWidth,compHeight,canvasWidth, canvasHeight);
    return true;
}
// private translate(value :number|OffScreenXOpt,p :Pack):number{
// if (typeof value == "number"){
//     return p.xPerc(value);
// }
//     let r = 0;
// switch (value) {
//     case OffScreenXOpt.XLeft:
//         r = -1 * (this.compWidth(p) + 10);
//         break;
//     case OffScreenXOpt.XRight:
//         r = p.xPerc(100) + this.compWidth(p) + 100;
//         break;
//     default:
//         break;
// }
// return Math.ceil(r);
// }
update(msDelta :number):boolean{
 super.update(msDelta);
return true;    
}
// public animate(from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
// let a = new MoveXItem(from,to,startValue,endValue);
// this.preInitMoves.push(a);
// }

// private adjestXAlign(p :Pack,incomming :number):number{
// let x = incomming    
// switch (this.xAlign) {
//     case this.xAlignmentOptions.Left:
//         break;
//     case this.xAlignmentOptions.Mid:
//          x = Math.floor(x - ((this.compWidth(p)/2)));
//         break;
//     case this.xAlignmentOptions.Right:
//         Math.floor(x - (this.compWidth(p)));
//         break;
// }
// return x ;
// }


} 