import AnimatedNoBase from "./AnimatedNoBase.js";
import {XAlignment} from "../../../design/xAlignment.js";
import { OffScreenXOpt } from "../../OffScreenXOpt.js";

 
export default class XAxis extends AnimatedNoBase{
    public readonly xAlignmentOptions:typeof XAlignment;   
    public xAlign: XAlignment;   
 
    //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
constructor(defaultValue :number){
    super(defaultValue );
    this.xAlignmentOptions = XAlignment; //final-ok
    this.xAlign = this.xAlignmentOptions.Mid;     
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// init(compWidth :number,compHeight :number,canvasWidth :number, canvasHeight :number): boolean {
//     super.init(compWidth,compHeight,canvasWidth, canvasHeight);
//     return true;
// }

private translateOffScreen(value :number|OffScreenXOpt):number{
if (this.compWidth == null){throw new Error("init error");
 }    
if (typeof value == "number"){
    return this.xPercToPix(value);
}
    let r = 0;
switch (value) {
    case OffScreenXOpt.XLeft:
        r = -1 * (this.compWidth);
        break;
    case OffScreenXOpt.XRight:
        r = this.xPercToPix(100) + this.compWidth;
        break;
    default:
        break;
}
return Math.ceil(r);
}
update(msDelta :number):boolean{
 super.update(msDelta);
return true;    
}
public value():number{
const r = super.value();
return this.adjestAlign(r);
}
    
// public animate(from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
// let a = new MoveXItem(from,to,startValue,endValue);
// this.preInitMoves.push(a);
// }

private adjestAlign(incomming :number):number{
if(this.compWidth==null){throw new Error("init error");
}    
let x = incomming    
switch (this.xAlign) {
    case this.xAlignmentOptions.Left:
        break;
    case this.xAlignmentOptions.Mid:
         x = Math.floor(x - ((this.compWidth/2)));
        break;
    case this.xAlignmentOptions.Right:
        Math.floor(x - (this.compWidth));
        break;
}
return x ;
}


} 