

import PreInitIncDec from "./preInitIncDec.js";
// import IAnimatedNo from "./IAnimatedNo.js";
import Increment from "../filters/incDec/increment.js";
import Decrement from "../filters/incDec/decrement.js";
// import Constant from "../../filters/constant.js";
import IFilter from "../design/IFilter.js";
// import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";

// export default class AnimatedNoBase implements IAnimatedNo{
export default class AnimatedNoBase {
    //--this is the only output from this obj and we do not want to send out null rather default vlaue in the start and later as its set
    private _ret_value :number;
    //_set_value can be null since it is applied during update only if its not null and then set to null back again-thus is used once.
    protected _set_value :number | null;
    protected preInitIncDecArray :PreInitIncDec[];
    protected animations :IFilter[];
    //------------------
    //--the component width and height can change without init dynamically so we need fn to get updated value but for canvasWidth or canvasHeight 
    protected compWidth    : null | (()=>number) ;
    protected compHeight   : null | (()=>number) ;
    protected canvasWidth  :number | null; 
    protected canvasHeight :number | null;
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(defaultValue :number=0){
    // place 1/3 to set this._ret_value
    this._ret_value  = defaultValue; 
    this._set_value  = null;    
    this.preInitIncDecArray = [];
    this.animations = [];
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
update(msDelta :number):boolean{
this.runSetValue();
this.runAnimations(msDelta);
return true;    
}
public value():number{
return this._ret_value;
}
//-using a seperate variable this._set_value it brilliant


protected runSetValue(){
    if (this._set_value !== null){
        //--place 2 of 3 where _ret_value is changed
        this._ret_value = this._set_value;//perc to pix
        this._set_value = null;
    }   
}
public setValue(n :number){
//--just assign it to _set_value and in the update => runSetValue.       

 this._ret_value = n;
// this._set_value = n;
} 
//--we are using PreInitIncDec obj to save the increment or decrement both since both structure are the same but for saving other Filter preInit commands we need seperate Array for one filter. 
public animate(from :number=0,to :number=10,startValue :number=0,endValue :number=100){
    let a = new PreInitIncDec(from,to,startValue,endValue);
    this.preInitIncDecArray.push(a);
}
////////////////----------PRIVATE----  
//-THis fn converts all the  preInitIncDecArray commands into inc dec objects during init
protected initIncDec(){
    for (let i = 0; i < this.preInitIncDecArray.length; i++) {
        const elm = this.preInitIncDecArray[i];
        if (elm.startValue < elm.endValue ){
            this.newIncrement(elm.from,elm.to,elm.startValue,elm.endValue);
        }else {
            this.newDecrement(elm.from,elm.to,elm.startValue,elm.endValue);
        }
    }
}

// This runs ALL THE ANIMATIONS (EACH filter is called and its value integrated )
private runAnimations(msDelta :number){
    for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            //--place 3 of 3 where _ret_value is changed
            this._ret_value = v;
            // console.log("msDelta",msDelta,"value",this._ret_value);
        }
} 
}
protected notInitError(){
    throw new Error("XAxis is not initialized yet");
}
protected checkNonNull(n :null | number):number{
let r = 0;    
if (n==null){
    this.notInitError()
}else {
    r = n; 
}
return r;
}


protected newIncrement(from :number,to :number,startValue :number,endValue :number){
    let c = new Increment(from,to,startValue,endValue);
    this.animations.push(c);    
}    
protected newDecrement(from :number,to :number,startValue :number,endValue :number){
    let c = new Decrement(from,to,startValue,endValue);
    this.animations.push(c);    
}    
} 