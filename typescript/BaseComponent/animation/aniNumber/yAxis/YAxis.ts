import { OffScreenXOpt } from "../xAxis/OffScreenXOpt.js";
import MoveXItem from "../moveXItem.js";
import {YAlignment} from "./yAlignment.js";

import IAnimatedNo from "../IAnimatedNo.js";
import { Pack } from "../../../../Bilza.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
import Constant from "../../filters/constant.js";
import IFilter from "../IFilter.js";

export default class YAxis implements IAnimatedNo{
    public readonly yAlignmentOptions:typeof YAlignment;   
    public yAlign: YAlignment;   
    
    private _ret_value :number | null;
    private _set_value :number | null;
    
    
    private preInitMoves :MoveXItem[];
    private animations :IFilter[];

    private compWidth : (p :Pack)=>number;
    private compHeight : (p :Pack)=>number;
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
    this.yAlignmentOptions = YAlignment; //final-ok
     
    this._ret_value  = null;
    this._set_value  = null;
    
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    
    this.yAlign = this.yAlignmentOptions.Top;
    this.preInitMoves = [];
    this.animations = [];
      
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(p: Pack,startTime :number,endTime :number, duration :number): boolean {
 //--initial value even if i set it the init is run before the set fn
        this._ret_value = this.translate(0,p);
    this.initMoveX(p);
    return true;
}
private initMoveX(p :Pack){
    for (let i = 0; i < this.preInitMoves.length; i++) {
        const elm = this.preInitMoves[i];
            const startValue = this.translate(elm.startValue,p);
            const endValue = this.translate(elm.endValue,p);
            if (startValue < endValue ){
                let c = new Increment(elm.from,elm.to,startValue,endValue);
                this.animations.push(c);    
            }else {
                let c = new Decrement(elm.from,elm.to,startValue,endValue);
                this.animations.push(c);    
            }
    }
}
private translate(value :number|OffScreenXOpt,p :Pack):number{
if (typeof value == "number"){
    return p.xPerc(value);
}
    let r = 0;
switch (value) {
    case OffScreenXOpt.XLeft:
        r = -1 * (this.compWidth(p) + 10);
        break;
    case OffScreenXOpt.XRight:
        r = p.xPerc(100) + this.compWidth(p) + 100;
        break;
    default:
        break;
}
return Math.ceil(r);
}
update(msDelta :number,p :Pack):boolean{
 if (this._set_value !== null){
     this._ret_value = p.xPerc(this._set_value);//perc to pix
     this._ret_value = this.adjestYAlign(p,this._ret_value);
     this._set_value = null;
 }   
//......................................
for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            this._ret_value = v;
            this._ret_value = this.adjestYAlign(p,this._ret_value);
        }
} 
return true;    
}
notInitError(){
    throw new Error("XAxis is not initialized yet");
}
public setValue(n :number):number{
this._set_value = n;
return this._set_value;
}
public animate(from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
let a = new MoveXItem(from,to,startValue,endValue);
this.preInitMoves.push(a);
}
value():number{
    if (this._ret_value == null){
        throw new Error("XAxis is not initialized");
        
    }else {
        return this._ret_value;
    }
}
private adjestYAlign(p :Pack,incomming :number):number{
let x = incomming    
switch (this.yAlign) {
    case this.yAlignmentOptions.Top:
        break;
    case this.yAlignmentOptions.Mid:
         x = Math.floor(x - ((this.compHeight(p)/2)));
        break;
    case this.yAlignmentOptions.Bot:
        Math.floor(x - (this.compHeight(p)));
        break;
}
return x ;
}
private checkNonNull(n :null | number):number{
let r = 0;    
if (n==null){
    this.notInitError()
}else {
    r = n; 
}
return r;
}

} 