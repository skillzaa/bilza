import AniNumberMoves from "./aniNumberMoves.js";

import IAnimatedNo from "./IAnimatedNo.js";
import { Pack } from "../../../Bilza.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
import IFilter from "./IFilter.js";

export default class BaseAniNumber implements IAnimatedNo{
    private _ret_value :number | null;
    private _set_value :number | null;
    private startTime :number | null;
    private endTime :number | null;
    private duration :number | null;
    private preInitAni :AniNumberMoves[];
    private animations :IFilter[];

    private compWidth : (p :Pack)=>number;
    private compHeight : (p :Pack)=>number;
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(compWidth :(p :Pack)=>number,compHeight :(p :Pack)=>number){
     
    this._ret_value  = null;
    this._set_value  = null;
    
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    this.startTime  = null;
    this.endTime  = null;
    this.duration  = null;
    this.preInitAni = [];
    this.animations = [];
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(p: Pack,startTime :number,endTime :number, duration :number): boolean {
    if (this._set_value !== null){
        this._ret_value = p.xPerc(this._set_value); //remove xPerc for normal no
        this._set_value = null;
    }          
 this.initMoveX(p);
    return true;
}
private initMoveX(p :Pack){
    for (let i = 0; i < this.preInitAni.length; i++) {
        const elm = this.preInitAni[i];

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
if (this._set_value !== null){
     this._ret_value = p.xPerc(this._set_value); //remove xPerc for normal no
     this._set_value = null;
 }   
//......................................    
//......................................
for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];

        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            this._ret_value = v;
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
public animate(from :number=0,to :number=10,startValue :number=0,endValue :number =100){
let a = new AniNumberMoves(from,to,startValue,endValue);
this.preInitAni.push(a);
}
value():number{
    if (this._ret_value == null){
        throw new Error("AniNumber is not initialized");
        
    }else {
        return this._ret_value;
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