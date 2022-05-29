import Axis from "../axis/axis.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import {XAlignment} from "./xAlignment.js";
//--Rules 
//--1-- the animations can return null BUT this class should not send null ahead .
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
// import IAnimatedNo from "./IAnimatedNo.js";

import Constant from "../../filters/constant.js";
import IFilter from "../IFilter.js";
import setBWzeroNhundred from "../../../../functions/setBWzeroNhundred.js";
// export default class AnimatedNoBase implements IAnimatedNo{
export default class XAxis extends Axis{
    public readonly xAlignmentOptions:typeof XAlignment;   
    public xAlign: XAlignment;
    //--this is the only output from this obj and we do not want to send out null rather default vlaue in the start and later as its set
    
    //_set_value can be null since it is applied during update only if its not null and then set to null back again-thus is used once.
    
    protected preInitIncDecArray :PreInitIncDecXAxis[];
    
    //------------------
    //--the component width and height can change without init dynamically so we need fn to get updated value but for canvasWidth or canvasHeight 
    protected compWidth    : null | (()=>number) ;
    protected compHeight   : null | (()=>number) ;
    protected canvasWidth  :number | null; 
    protected canvasHeight :number | null;
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(defaultValue :number=0){
    super(defaultValue);
    this.xAlignmentOptions = XAlignment; //final-ok
    this.xAlign = this.xAlignmentOptions.Mid; 
    // place 1/3 to set this._ret_value
    
    this._set_value  = null;    
    this.preInitIncDecArray = [];
    
    //--
    this.compWidth = null;
    this.compHeight = null;
    this.canvasWidth = null;
    this.canvasHeight = null;
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(compWidth :()=>number,compHeight :()=>number,canvasWidth :number, canvasHeight :number): boolean {
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.runSetValue();
    this.initIncDec();
    return true;
}
//--There are different kind of Filters that can be applied to a number One such filter is increment another decrement. There can be other filters like Wiggle, SpanBetweenXPoints, CosCurve etc etc.
//--For each type of filter we will have a preInitArray which will collect all the filters applied 
//-- AND when init all these Arrays are converted into real objects which then effect the out put values when their time comes.
//---initIncDec is one such fn which while init will convert.
//---Every such fn which initialize an array into Filter Objects there is also a collecting function -they work in pair. The pair function for this fn is this.animate.
//--For wiggle filter there may be a fn this.wiggle which will collect all the preInit wiggle commands and store then into some preInitWiggle array and then run them during init with initWiggle. 
update(msDelta :number):boolean{
this.runSetValue();
this.runAnimations(msDelta);
return true;    
}
public value():number{
return this.adjestAlign(this._ret_value);    
}
//-using a seperate variable this._set_value it brilliant
public runSetValue(){
    if (this._set_value !== null){
        //--place 2 of 3 where _ret_value is changed
        this._ret_value = this.xPercToPix(this._set_value);
        this._set_value = null;
    }   
}

//--we are using PreInitIncDec obj to save the increment or decrement both since both structure are the same but for saving other Filter preInit commands we need seperate Array for one filter. 
public animate(from :number=0,to :number=10,startValue :number | OffScreenXOpt=0,endValue :number | OffScreenXOpt=100){
    let a = new PreInitIncDecXAxis(from,to,startValue,endValue);
    this.preInitIncDecArray.push(a);
}

////////////////----------PRIVATE----  
//-This fn converts all the  preInitIncDecArray commands into inc dec objects during init
public initIncDec(){
    for (let i = 0; i < this.preInitIncDecArray.length; i++) {
        const elm = this.preInitIncDecArray[i];
        const start = this.translateOffScreen(elm.startValue);
            const end = this.translateOffScreen(elm.endValue);

        if (start < end ){
            let c = this.newIncrement(elm.from,elm.to,start,end);
            this.animations.push(c);
        }else {
            let c = this.newDecrement(elm.from,elm.to,start,end);
            this.animations.push(c); 
        }
    }
}

protected xPercToPix(perc :number):number{
let r = 0;
    if (this.canvasWidth == null){
        this.notInitError();
    }else {
        let checked = setBWzeroNhundred(perc);
        r = Math.ceil((this.canvasWidth  /100) * checked); 
    }
return r;    
}


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