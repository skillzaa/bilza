//-- Main objective for creating XAxis extends AnimatedNoBase are 3
//--1-- Add X alignment in the resulting value XAlignment
//--2-- translate OffScreenXOpt into pix
//--3-- convert user given percentages into pix

import AnimatedNoBase from "../animatedNoBase/AnimatedNoBase.js";
import {XAlignment} from "./xAlignment.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";

export default class XAxis extends AnimatedNoBase{
    public readonly xAlignmentOptions:typeof XAlignment;   
    public xAlign: XAlignment;   
    public PreInitIncDecXAxisArray :PreInitIncDecXAxis[];
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(defaultValue :number){
    super(defaultValue );
    this.xAlignmentOptions = XAlignment; //final-ok
    this.xAlign = this.xAlignmentOptions.Mid;     
    this.PreInitIncDecXAxisArray = [];
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
//
//-----init of parent is used
//
private translateOffScreen(value :number|OffScreenXOpt):number{
if (this.compWidth == null){throw new Error("init error");
 }    
if (typeof value == "number"){
    return this.xPercToPix(value);
}
    let r = 0;
switch (value) {
    case OffScreenXOpt.XLeft:
        r = -1 * (this.compWidth());
        break;
    case OffScreenXOpt.XRight:
        r = this.xPercToPix(100) + this.compWidth();
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
//23-may-2022::main reason for extending AniNoBase
return this.adjestAlign(r);
}
    

public animate(from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
let a = new PreInitIncDecXAxis(from,to,startValue,endValue);
this.PreInitIncDecXAxisArray.push(a);
}

protected initIncDec(){
for (let i = 0; i < this.PreInitIncDecXAxisArray.length; i++) {
    const elm = this.PreInitIncDecXAxisArray[i];
    const start = this.translateOffScreen(elm.startValue);
    const end = this.translateOffScreen(elm.endValue);
        if (start < end ){
            this.newIncrement(elm.from,elm.to,start,end);
        }else {
            this.newDecrement(elm.from,elm.to,start,end);
        }
}
}

private adjestAlign(incomming :number):number{
if(this.compWidth==null){throw new Error("init error");
}    
let x = incomming    
switch (this.xAlign) {
    case this.xAlignmentOptions.Left:
        break;
    case this.xAlignmentOptions.Mid:
         x = Math.floor(x - ((this.compWidth()/2)));
        break;
    case this.xAlignmentOptions.Right:
        Math.floor(x - (this.compWidth()));
        break;
}
return x ;
}


} 