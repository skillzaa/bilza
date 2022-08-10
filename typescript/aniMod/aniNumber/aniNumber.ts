import AniProp from "../aniProp/aniProp.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import Vibrate from "./vibrate.js";
import RandomNo from "./randomNo.js";
import JumpBetween from "./jumpBetween.js";
import Oscillate from "./oscillate.js"; 

import GotoData from "../aniProp/gotoData.js";
import IFilter from "../IFilter.js";

export default class AniNumber extends AniProp<number>  {


public readonly minValue :number;
public readonly maxValue :number;
protected canvasWidthHeight : null | number;
protected responsive :boolean;
//--no need for default value-the number-0 is default value
constructor(initialValue :number=0,minValue :number=0,maxValue :number=100){
super(initialValue);
this.canvasWidthHeight = null; 
this.responsive = false; 
this.minValue  = minValue; 
this.maxValue  = maxValue; 
}
//----------------------------------
init(responsive :boolean, canvasWidthHeight :number){
this.responsive = responsive;    
this.canvasWidthHeight = canvasWidthHeight;
//----------------------------------
this.initSet();    
this.initGoto();
//----------------------------------
    for (let i = 0; i < this.filters.length; i++) {
        const fil = this.filters[i];
        fil.init(this.canvasWidthHeight);
    }
    
    // this.initAnimate();
    // this.initRandom();
    // this.initJumpBetween();
    
}

initGoto(){
if (this.responsive == false){return;} //safety    
for (let i = 0; i < this.gotoArray.length; i++) {
    const elm = this.gotoArray[i];
    let v = elm.value;
    // if ( this.usePercentages == true){
        elm.value = this.percToPix(elm.value);
    // }
}      
}
initSet(){
if (this.responsive == false){return;} //safety    
    this._value = this.percToPix(this._value);
} 
protected percToPix(perc :number){
    if (this.canvasWidthHeight == null){throw("init error");}
    return ((this.canvasWidthHeight /100) * perc);
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
public animate(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        // This wasted my 2 hours there is no goto in aniNumber but there is one in its child class AniNoProp..so when AniNoProp run initAnimate and call this animate the this.goto again sends it back to AniNoProp where as i required super.goto. 
        // this.goto(msDeltaStart,startValue);
        super.goto(msDeltaStart,startValue);
        super.goto(msDeltaEnd,endValue);
        let c = new Increment(msDeltaStart,msDeltaEnd,startValue,endValue);
        this.filters.push(c);
    }else if (startValue > endValue){
        let c = new Decrement(msDeltaStart,msDeltaEnd,startValue,endValue);
        this.filters.push(c);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
//--- This goto is to ensure that the last frame is met
// this.goto(to , endValue );    
}

public vibrate(msDeltaStart :number,msDeltaEnd :number,offset :number=10,delayInMilliSec :number= 100){
    const v = new Vibrate(msDeltaStart,msDeltaEnd,offset,delayInMilliSec);
    this.filters.push(v);
}
public random(msDeltaStart :number,msDeltaEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
const v = new RandomNo(msDeltaStart,msDeltaEnd,min,max,delayInMilliSec);
this.filters.push(v);
}
public jumpBetween(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMilliSec :number=0){
    const v = new JumpBetween(msDeltaStart,msDeltaEnd,pointOne, pointTwo,delayInMilliSec);
    this.filters.push(v);
}

public oscillate(msDeltaStart :number,msDeltaEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
const v = new Oscillate(msDeltaStart,msDeltaEnd,startValue, endValue,speed);
this.filters.push(v);
}

} 