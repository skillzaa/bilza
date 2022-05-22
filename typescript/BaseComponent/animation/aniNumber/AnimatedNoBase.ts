import PreInitMoves from "./preInitMoves.js";
import IAnimatedNo from "./IAnimatedNo.js";
import { Pack } from "../../../Bilza.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
import Constant from "../filters/constant.js";
import IFilter from "./IFilter.js";

export default class AnimatedNoBase implements IAnimatedNo{
    
    private _ret_value :number | null;
    private _set_value :number | null;
    
    
    private preInitMoves :PreInitMoves[];
    private animations :IFilter[];

    private compWidth : (p :Pack)=>number;
    private compHeight : (p :Pack)=>number;
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
     
    this._ret_value  = null;
    this._set_value  = null;
    
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    
    this.preInitMoves = [];
    this.animations = [];
      
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(p: Pack,startTime :number,endTime :number, duration :number): boolean {
 //--initial value even if i set it the init is run before the set fn
    this.runSetValue();
    this.initMoves(p);
    return true;
}
private initMoves(p :Pack){
    for (let i = 0; i < this.preInitMoves.length; i++) {
        const elm = this.preInitMoves[i];

            if (elm.startValue < elm.endValue ){
                let c = new Increment(elm.from,elm.to,elm.startValue,elm.endValue);
                this.animations.push(c);    
            }else {
                let c = new Decrement(elm.from,elm.to,elm.startValue,elm.endValue);
                this.animations.push(c);    
            }
    }
}

update(msDelta :number,p :Pack):boolean{
this.runSetValue();
this.runAnimations(msDelta);
return true;    
}
runSetValue(){
    if (this._set_value !== null){
        this._ret_value = this._set_value;//perc to pix
        this._set_value = null;
    }   
}
runAnimations(msDelta :number){
    for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            this._ret_value = v;
        }
} 
}

notInitError(){
    throw new Error("XAxis is not initialized yet");
}
public setValue(n :number):number{
this._set_value = n;
return this._set_value;
}
public animate(from :number=0,to :number=10,startValue :number=0,endValue :number=100){
let a = new PreInitMoves(from,to,startValue,endValue);
this.preInitMoves.push(a);
}
value():number{
    if (this._ret_value == null){
        throw new Error("XAxis is not initialized");
        
    }else {
        return this._ret_value;
    }
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