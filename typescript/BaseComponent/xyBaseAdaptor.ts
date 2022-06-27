import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designBC/preInitGoto.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";
import PreInitRandom from "./designBC/preInitRandom.js";
import PreInitJumpBetween from "./designBC/preInitJumpBetween.js";
//--Purpose to collect preInit Data into various arrays for each filter the child classes can then init these values once they have the canvasWidth and height.
//--ANDDDDDD since the aniNumber is also wrapped by this adaptor so this is a combination of 2 classes the wrapper and the base functions (baseVibrate , baseAnimate) gives acces to the base/wrapped aniNumber functions which are used by the child class during init
//--This is just the preinit data collection of filters mechanism
//--This class does not need init
export default class XyBaseAdaptor {
protected preInitGotos:PreInitGoto[];
protected preInitAnimates:PreInitAnimate[];
protected preInitVibrates:PreInitVibrate[];
protected preInitRandoms:PreInitRandom[];
protected preInitJumpBetweens:PreInitJumpBetween[];
private _XorY :AniNumber;


constructor(){
this._XorY = new AniNumber(0);
this.preInitRandoms = []; 
this.preInitGotos = []; 
this.preInitAnimates = []; 
this.preInitVibrates = [];
this.preInitJumpBetweens = [];

}
//--it conts preinit data so no init here init will be in child classes

update(msDelta :number){
this._XorY.update(msDelta);
}
value():number{
    return this._XorY.value();
}

public jumpBetween(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,skipFrames :number=0){
const c = new PreInitJumpBetween(startTimeSec,endTimeSec,pointOne, pointTwo,skipFrames);    
this.preInitJumpBetweens.push(c);
}
public baseJumpBetween(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,skipFrames :number=0){
 this._XorY.jumpBetween(startTimeSec,endTimeSec,pointOne, pointTwo,skipFrames);    
}

public goto(atSecond  :number,value :number){
const c = new PreInitGoto(atSecond,value);    
this.preInitGotos.push(c);
}
//--between goto and baseGoto is initGoto
public baseGoto(atSecond  :number,value :number){
    this._XorY.goto(atSecond,value);
}
public vibrate(from: number, to: number, xValue: number, offset: number, delay: number): void {
    const c = new PreInitVibrate(from,to,xValue,offset,delay);
    this.preInitVibrates.push(c);
}
public baseVibrate(from: number, to: number, xValue: number, offset: number, delay: number): void {
    this._XorY.vibrate(from,to,xValue,offset,delay);
}
public random(startTimeSec :number,endTimeSec :number,min :number=1, max :number=10,skipXFrames :number=0): void {
const c = new PreInitRandom (startTimeSec,endTimeSec,min, max,skipXFrames);
    this.preInitRandoms.push(c);
}
public baseRandom(startTimeSec :number,endTimeSec :number,min :number=1, max :number=10,skipXFrames :number=0): void {
    this._XorY.random(startTimeSec,endTimeSec,min,max,skipXFrames);
}

public animate( startTime :number,endTime :number, startValue :number,endValue :number): void {
    const c = new PreInitAnimate(startTime,endTime, startValue,endValue);
    this.preInitAnimates.push(c);    
}
public baseAnimate( startTime :number,endTime :number, startValue :number,endValue :number){
this._XorY.animate( startTime,endTime, startValue,endValue);
}
////////////////////////////////////////////////////
}