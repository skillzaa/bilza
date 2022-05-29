// import AnimatedNoBase from "../animatedNoBase/AnimatedNoBase.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
import IFilter from "../IFilter.js";

export default class Axis {
    protected animations :IFilter[];
    //--this is the only output from this obj and we do not want to send out null rather default vlaue in the start and later as its set
    protected _ret_value :number;
    protected _set_value :number | null;
    
constructor(defaultValue :number){
    this.animations = [];
    this._ret_value  = defaultValue; 
    this._set_value  = null; 
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
protected newIncrement(from :number,to :number,startValue :number,endValue :number):Increment{
    let c = new Increment(from,to,startValue,endValue);
    return c;   
}    
protected newDecrement(from :number,to :number,startValue :number,endValue :number):Decrement{
    let c = new Decrement(from,to,startValue,endValue);
    return c;    
} 

// This runs ALL THE ANIMATIONS (EACH filter is called and its value integrated )
protected runAnimations(msDelta :number){
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
//--just save the incomming value into a temp var called _Set_value. do not try to change it since the comp is not init yet. when its init and runSetValue is run then _set_value will be translated into _ret_value
public setValue(n :number){
this._set_value = n;
}


/////////////////////////////////////////////
}