// import AniProp from "../aniProp/aniProp.js";
// import Increment from "./aniFilters/increment.js";
// import Decrement from "./aniFilters/decrement.js";
// // import Vibrate from "./effFilters/vibrate.js";
// import RandomNo from "./aniFilters/randomNo.js";
// import JumpBetween from "./aniFilters/jumpBetween.js";
// import Oscillate from "./aniFilters/oscillate.js"; 



// export default class AniNumber extends AniProp<number>  {
    
// public readonly minValue :number;
// public readonly maxValue :number;
// // protected canvasWidthHeight : null | number;
// // protected responsive :boolean;

// constructor(initialValue :number=0,responsive = false, minValue :number=-3000,maxValue :number=3000){

// super(initialValue);
//     // this.responsive = responsive; 
// // this.canvasWidthHeight = null; 

// this.minValue  = minValue; 
// this.maxValue  = maxValue; 

// }
// //----------------------------------
// // setResponsive(tf :boolean):boolean{
// //     this.responsive = tf;
// //     return this.responsive;
// // }
// //----------------------------------
// // init(canvasWidthHeight :number){
// //     if (this.responsive == false){
// //         console.error("this.responsive == false");
// //         return;
// //     }    
// //----------------------------------
// // this.canvasWidthHeight = canvasWidthHeight;
// //----------------------------------
// // this.initSet();    
// // this.initGoto();
// // //----------------------------------
// //     for (let i = 0; i < this.filters.length; i++) {
// //         const fil = this.filters[i];
// //         fil.init(this.canvasWidthHeight);
// //     }    
// // }

// // private initGoto(){
// // if (this.responsive == false){return;} //safety    
// // for (let i = 0; i < this.gotoArray.length; i++) {
// //     const elm = this.gotoArray[i];
// //     elm.value = this.percToPix(elm.value);
// // }      
// // }
// // private initSet(){
// // if (this.responsive == false){return;} //safety    
// //     this._value = this.percToPix(this._value);
// // } 
// // private percToPix(perc :number){
// //     if (this.canvasWidthHeight == null){throw("init error");}
// //     return ((this.canvasWidthHeight /100) * perc);
// // }

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// public animate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
//     if (startValue < endValue ){
//         // This wasted my 2 hours there is no goto in aniNumber but there is one in its child class AniNoProp..so when AniNoProp run initAnimate and call this animate the this.goto again sends it back to AniNoProp where as i required super.goto. 
//         // this.goto(rTimeMsStart,startValue);
//         const stGoto = super.goto(rTimeMsStart,startValue);
//         const endGoto = super.goto(rTimeMsEnd,endValue);
//         let c = new Increment(rTimeMsStart,rTimeMsEnd,startValue,endValue);
//         stGoto.aniFilters.push(c);

//     }else if (startValue > endValue){
//         const stGoto = super.goto(rTimeMsStart,startValue);
//         const endGoto = super.goto(rTimeMsEnd,endValue);
//         let c = new Decrement(rTimeMsStart,rTimeMsEnd,startValue,endValue);
//         stGoto.aniFilters.push(c);
//     }
//     // else if (startValue == endValue){
//     //     let c = new ConstantNo(from,to,startValue);
//     //     this.filters.push(c);
//     // }
// //--- This goto is to ensure that the last frame is met
// // this.goto(to , endValue );    
// }

// public random(rTimeMsStart :number,rTimeMsEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
// const v = new RandomNo(rTimeMsStart,rTimeMsEnd,min,max,delayInMilliSec);
// // this.filters.push(v);
// }
// public jumpBetween(rTimeMsStart :number,rTimeMsEnd :number,pointOne :number=1, pointTwo :number=10,delayInMilliSec :number=0){
//     const v = new JumpBetween(rTimeMsStart,rTimeMsEnd,pointOne, pointTwo,delayInMilliSec);
//     // this.filters.push(v);
// }

// public oscillate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
// const v = new Oscillate(rTimeMsStart,rTimeMsEnd,startValue, endValue,speed);
// // this.filters.push(v);
// }

// //---effects
// // public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delayInMilliSec :number= 100){
// //     const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
// //     this.filters.push(v);
// // }
// } 