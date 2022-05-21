import { OffScreenXOpt } from "../../OffScreenXOpt.js";
import MoveXItem from "./moveXItem.js";
// import IFilter from "./IFilter.js";
import IAnimatedNo from "./IAnimatedNo.js";
// import Adder from "./adder.js";
import { Pack } from "../../../Bilza.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
import Constant from "../filters/constant.js";
import IFilter from "./IFilter.js";

export default class XAxis implements IAnimatedNo{
    // public increment :typeof Increment;
    // public decrement :typeof Decrement;
    
    public compWidth :number | null;
    public compHeight :number | null;
    private _ret_value :number | null;
    private _set_value :number | null;
    private startTime :number | null;
    private endTime :number | null;
    private duration :number | null;
    private preInitMoves :MoveXItem[];
    private animations :IFilter[];
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(){
    this._ret_value  = null;
    this._set_value  = null;
    this.compWidth  = null;
    this.compHeight  = null;
    this.startTime  = null;
    this.endTime  = null;
    this.duration  = null;

    this.preInitMoves = [];
    this.animations = [];
      
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(p: Pack,startTime :number,endTime :number, duration :number, compWidth: number, compHeight: number): boolean {
 //--initial value even if i set it the init is run before the set fn
        this._ret_value = this.translate(0,p,compWidth);

    this.startTime = startTime;
    this.endTime = endTime;
    this.duration = duration;
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    this.initMoveX(p,compWidth);
    return true;
}
update(msDelta :number,p :Pack):boolean{
 if (this._set_value !== null){
     this._ret_value = p.xPerc(this._set_value);
     this._set_value = null;
 }   

for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            this._ret_value = v;
        }
}    
return true;    
}


private translate(value :number|OffScreenXOpt,p :Pack,compWidth:number):number{
if (typeof value == "number"){
    return p.xPerc(value);
}
    let r = 0;
switch (value) {
    case OffScreenXOpt.XLeft:
        r = -1 * (compWidth + 10);
        break;
    case OffScreenXOpt.XRight:
        r = p.xPerc(100) + compWidth + 100;
        break;
    default:
        break;
}
return Math.ceil(r);
}

notInitError(){
    throw new Error("XAxis is not initialized yet");
}
public setValue(n :number):number{
this._set_value = n;
return this._set_value;
}

public moveX(from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
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

private initMoveX(p :Pack,compWidth :number){
    for (let i = 0; i < this.preInitMoves.length; i++) {
        const elm = this.preInitMoves[i];
            const startValue = this.translate(elm.startValue,p,compWidth);
            const endValue = this.translate(elm.endValue,p,compWidth);
            if (startValue < endValue ){
                let c = new Increment(elm.from,elm.to,startValue,endValue);
                this.animations.push(c);    
            }else {
                let c = new Decrement(elm.from,elm.to,startValue,endValue);
                this.animations.push(c);    
            }
    }
}

checkNonNull(n :null | number):number{
let r = 0;    
if (n==null){
    this.notInitError()
}else {
    r = n; 
}
return r;
}

} 