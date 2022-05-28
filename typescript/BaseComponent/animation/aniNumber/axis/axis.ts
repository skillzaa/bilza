// import AnimatedNoBase from "../animatedNoBase/AnimatedNoBase.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
export default class Axis {


constructor(){

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

}