import AniProp from "../animationDesign/aniProp.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Vibrate from "./filters/vibrate.js";
import JumpBetween from "./filters/jumpBetween.js";
import SetOnce from "./filters/setOnce_goto.js";
import RandomNo from "./filters/randomNo.js";
import ConstantNo from "./filters/constantNo.js";
import Oscillate from "./filters/oscillate.js";
/**
 * 4-july-2022 AniNumber is the <number> imple of AniProp
 * It provides an interface for All the number Filters when ever we add any new Filter. This is from where its interface is presented.
 * All the classes upto this point ie baseFilter , AniProp and finally this one AniNumber does not need init and use raw numbers.
 * Any property that is based on any sort of number will either use AniNumber as base class or will write an adapter around it.
 */
export default class AniNumber extends AniProp <number> {
constructor(defaultValue :number){
   super(defaultValue); 
}
public animate(from :number,to :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let c = new Increment(from,to,startValue,endValue);
        this.filters.push(c);
    }else if (startValue > endValue){
        let c = new Decrement(from,to,startValue,endValue);
        this.filters.push(c);
    }else if (startValue == endValue){
        let c = new ConstantNo(from,to,startValue);
        this.filters.push(c);
    }
//--- This goto is to ensure that the last frame is met
this.goto(to , endValue );    
}

public vibrate(from :number,to :number,seed :number=10,offset :number=10,delay :number=0){
    const v = new Vibrate(from,to,seed,offset,delay);
    this.filters.push(v);
}
public jumpBetween(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,everyXFrame :number=0){
    const v = new JumpBetween(startTimeSec,endTimeSec,pointOne, pointTwo,everyXFrame);
    this.filters.push(v);
}
public random(startTimeSec :number,endTimeSec :number,min :number=0, max :number=100,everyXFrame :number=0){
const v = new RandomNo(startTimeSec,endTimeSec,min, max,everyXFrame);
this.filters.push(v);
}
public goto(startTimeSec :number,theValue :number=0){
const v = new SetOnce(startTimeSec,theValue);
this.filters.push(v);
}
public oscillate(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
const v = new Oscillate(startTimeSec,endTimeSec,startValue, endValue,speed);
this.filters.push(v);
}

} 