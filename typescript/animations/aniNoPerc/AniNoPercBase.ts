// import AniProp from "../animationDesign/aniProp.js";
import AniNumber from "../aniNumber/aniNumber.js";
 
import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitVibrate from "./designNoPerc/preInitVibrate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";
/**
 * 4-july-2022 
 * So far we have 
 *      - Filter
 *      - AniProp which has filters array.
 *      - AniNumber a <number> impl of AniProp
 *      - Finally AniNoPerc : a base class for animated properties which uses NUMBER  and need init.
 * keep in mind---
 * ---------- Only AniNumber children needs init. Other AniProps like AniString or AniBoolean does not need init.
 * ---------- The init just means getting the canvasWidth and canvasHeight property.
 * ---------- This measn that the init Prop can be of 2 flavours 1--which need canvasWidth and 2--needs canvasHeight. and we need seperate classes for them each of these classes during init will create their own concrete values (7-july-2022 we dont need seperate class)
* 
* 2-july-2022 Purpose to collect preInit Data into various arrays for each AniNumber the child classes can then init these values once they have the canvasWidth and height
 * This class uses aniNumber internally and wrappes it such that all the pre-init data is saved and on init its converted into concrete values and actual filters are loaded.//ADAPTER PATTERN
 * Since Percentages are just used when we consider canvas width or canvas height. So we have 2 diliects of child classes
 * Hence this class can further have 2 types of classes 
 * -- the X classes (canasWidth) 
 * -- the Y classes (canasHeight)
 * hence the _XorY
 * 
 * --- However this class doen not need to extends AniProp since thats already done in AniMumber extends AniProp <number>
 */

export default class AniNoPercBase { 
protected usePercentages :boolean | null; 
protected preInitGotos:PreInitGoto[];
protected preInitAnimates:PreInitAnimate[];
protected preInitVibrates:PreInitVibrate[];
protected preInitRandoms:PreInitRandom[];
protected preInitJumpBetweens:PreInitJumpBetween[];
protected preInitOscilate:PreInitOscilate[];
protected _XorY :AniNumber; 
protected _initValue :number; 
  

constructor(defaultValue=0){
// 4-july 2022 : i think we shd not give it defaultValue since that not in percentages we should give that to _initValue and during init translate it; ??? - but that is already happens    
this._XorY = new AniNumber(defaultValue);

//--user can use setInitValue if this prop is deeply nested
this.usePercentages = true; 
this._initValue = defaultValue;
this.preInitRandoms = []; 
this.preInitGotos = []; 
this.preInitAnimates = []; 
this.preInitVibrates = [];
this.preInitJumpBetweens = [];
this.preInitOscilate = [];

}
/**
 * 4-july-2022
 * There is "set" method in AniProp and then in AniNumber but here in AniNoPerc we can not use "set" without init--so dont over-ride set here rather over-ride it in AniNoXPerc and AniNoYPerc.
 * Also  "setInitValue" is req since these props are deeply nested and providing a default value at creation may not be possible. 
 */
setInitValue(n :number){
this._initValue = n;
}
 
update(msDelta :number){
this._XorY.update(msDelta);
}
value():number{
    return this._XorY.value();
}
/**
 * So set in AniNumber/AniPro is override here
 * Override method can be used in AniXper and AniYper in which you can just override the value  
 */
public override(n :number):number{
this._XorY.set(n);
return this._XorY.value();
}
///////////////////////////////////////////////////////
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
public vibrate(from: number, to: number, seed: number, offset: number, delay: number): void {
    const c = new PreInitVibrate(from,to,seed,offset,delay);
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
public oscillate(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
const c = new PreInitOscilate(startTimeSec,endTimeSec,startValue, endValue,speed);
this.preInitOscilate.push(c);
}
public baseOscilate(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
    this._XorY.oscillate(startTimeSec,endTimeSec,startValue, endValue,speed);
}
////////////////////////////////////////////////////
}