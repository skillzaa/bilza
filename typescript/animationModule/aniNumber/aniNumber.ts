import AniProp from "../aniProp/aniProp.js";
// import Increment from "./aniFilters/increment.js";
// import Decrement from "./aniFilters/decrement.js";
// import Vibrate from "./effFilters/vibrate.js";
// import RandomNo from "./aniFilters/randomNo.js";
// import JumpBetween from "./aniFilters/jumpBetween.js";
// import Oscillate from "./aniFilters/oscillate.js"; 



export default class AniNumber extends AniProp<number>  {
    
public readonly minValue :number;
public readonly maxValue :number;

constructor(initialValue :number=0, minValue :number=-3000,maxValue :number=3000){

super(initialValue);

this.minValue  = minValue; 
this.maxValue  = maxValue; 

}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// public animate(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){
//     if (startValue < endValue ){
//         // This wasted my 2 hours there is no goto in aniNumber but there is one in its child class AniNoProp..so when AniNoProp run initAnimate and call this animate the this.goto again sends it back to AniNoProp where as i required super.goto. 
//         // this.goto(msDeltaStart,startValue);
//         const stGoto = super.goto(msDeltaStart,startValue);
//         // const endGoto = super.goto(msDeltaEnd,endValue);
//         let c = new Increment(msDeltaStart,msDeltaEnd,startValue,endValue);
//         // stGoto.aniFilters.push(c);

//     }else if (startValue > endValue){
//         const stGoto = super.goto(msDeltaStart,startValue);
//         const endGoto = super.goto(msDeltaEnd,endValue);
//         let c = new Decrement(msDeltaStart,msDeltaEnd,startValue,endValue);
//         // stGoto.aniFilters.push(c);
//     }
//     // else if (startValue == endValue){
//     //     let c = new ConstantNo(from,to,startValue);
//     //     this.filters.push(c);
//     // }
// //--- This goto is to ensure that the last frame is met
// // this.goto(to , endValue );    
// }

// public random(msDeltaStart :number,msDeltaEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
// const v = new RandomNo(msDeltaStart,msDeltaEnd,min,max,delayInMilliSec);
// // this.filters.push(v);
// }
// public jumpBetween(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMilliSec :number=0){
//     const v = new JumpBetween(msDeltaStart,msDeltaEnd,pointOne, pointTwo,delayInMilliSec);
//     // this.filters.push(v);
// }

// public oscillate(msDeltaStart :number,msDeltaEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
// const v = new Oscillate(msDeltaStart,msDeltaEnd,startValue, endValue,speed);
// // this.filters.push(v);
// }

//---effects
// public vibrate(msDeltaStart :number,msDeltaEnd :number,offset :number=10,delayInMilliSec :number= 100){
//     const v = new Vibrate(msDeltaStart,msDeltaEnd,offset,delayInMilliSec);
//     this.filters.push(v);
// }
} 