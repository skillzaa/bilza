// //-- Main objective for creating XAxis extends AnimatedNoBase are 3
// //--1-- Add X alignment in the resulting value XAlignment
// //--2-- translate OffScreenXOpt into pix
// //--3-- convert user given percentages into pix
// import Increment from "../../filters/increment.js";
// import Decrement from "../../filters/decrementTimeBased.js";
// import IAnimatedNo from "../IAnimatedNo.js";
// import {XAlignment} from "./xAlignment.js";
// import { OffScreenXOpt } from "./OffScreenXOpt.js";
// import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";

// export default class XAxis implements IAnimatedNo {
//     public readonly xAlignmentOptions:typeof XAlignment;   
//     public xAlign: XAlignment;   
//    //--this is the only output from this obj and we do not want to send out null rather default vlaue in the start and later as its set
//    private _ret_value :number;
//    //_set_value can be null since it is applied during update only if its not null and then set to null back again-thus is used once.
//    protected _set_value :number | null;
//    protected preInitIncDecArray :PreInitIncDec[];
//    protected animations :IFilter[];
//    //------------------
//    //--the component width and height can change without init dynamically so we need fn to get updated value but for canvasWidth or canvasHeight 
//    protected compWidth    : null | (()=>number) ;
//    protected compHeight   : null | (()=>number) ;
//    protected canvasWidth  :number | null; 
//    protected canvasHeight :number | null;
    
// //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// constructor(defaultValue :number){
//     this.xAlignmentOptions = XAlignment; //final-ok
//     this.xAlign = this.xAlignmentOptions.Mid; 
//     this._ret_value  = defaultValue; 
//     this._set_value  = null;    
//     this.preInitIncDecArray = [];
//     this.animations = [];
//     //--
//     this.compWidth = null;
//     this.compHeight = null;
//     this.canvasWidth = null;
//     this.canvasHeight = null;    
// }
// //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// init(compWidth :()=>number,compHeight :()=>number,canvasWidth :number, canvasHeight :number): boolean {
//     this.compWidth = compWidth;
//     this.compHeight = compHeight;
//     this.canvasWidth = canvasWidth;
//     this.canvasHeight = canvasHeight;
//     this.runSetValue();
//     this.initIncDec();
//     return true;
// }
// private translateOffScreen(value :number|OffScreenXOpt):number{
// if (this.compWidth == null){throw new Error("init error");
//  }    
// if (typeof value == "number"){
//     return this.xPercToPix(value);
// }
//     let r = 0;
// switch (value) {
//     case OffScreenXOpt.XLeft:
//         r = -1 * (this.compWidth());
//         break;
//     case OffScreenXOpt.XRight:
//         r = this.xPercToPix(100) + this.compWidth();
//         break;
//     default:
//         break;
// }
// return Math.ceil(r);
// }
// update(msDelta :number):boolean{
// this.runSetValue();
// this.runAnimations(msDelta);
// return true;    
// }
// public value():number{
// return this._ret_value;
// }

// protected runSetValue(){
//     if (this._set_value !== null){
//         //--place 2 of 3 where _ret_value is changed
//         this._ret_value = this._set_value;//perc to pix
//         this._set_value = null;
//     }   
// }

    
// //--override the base methos
// public setValue(n :number | OffScreenXOpt){   
// this._set_valueXAxis = n;
// }
// protected runSetValue(){
//     if (this._set_valueXAxis !== null){
//         //--place 2 of 3 where _ret_value is changed
//         this._ret_valueXAxis= this.translateOffScreen(this._set_valueXAxis);//perc to pix
//         this._set_valueXAxis = null;
//     }   
// }    
// public animate(from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
// let a = new PreInitIncDecXAxis(from,to,startValue,endValue);
// this.PreInitIncDecXAxisArray.push(a);
// }
// protected initIncDec(){
// for (let i = 0; i < this.PreInitIncDecXAxisArray.length; i++) {
//     const elm = this.PreInitIncDecXAxisArray[i];
//     const start = this.translateOffScreen(elm.startValue);
//     const end = this.translateOffScreen(elm.endValue);
//         if (start < end ){
//             this.newIncrement(elm.from,elm.to,start,end);
//         }else {
//             this.newDecrement(elm.from,elm.to,start,end);
//         }
// }
// }
// private adjestAlign(incomming :number):number{
// if(this.compWidth==null){throw new Error("init error");
// }    
// let x = incomming    
// switch (this.xAlign) {
//     case this.xAlignmentOptions.Left:
//         break;
//     case this.xAlignmentOptions.Mid:
//          x = Math.floor(x - ((this.compWidth()/2)));
//         break;
//     case this.xAlignmentOptions.Right:
//         Math.floor(x - (this.compWidth()));
//         break;
// }
// return x ;
// }

// private runAnimations(msDelta :number){
//     for (let i = 0; i < this.animations.length; i++) {
//         const ani = this.animations[i];
//         // ani.init(p);
//         ani.update(msDelta);
//         let v  = ani.value(); 
//         if ( v != null){
//             //--place 3 of 3 where _ret_value is changed
//             this._ret_value = v;
//             // console.log("msDelta",msDelta,"value",this._ret_value);
//         }
// } 
// }
// protected notInitError(){
//     throw new Error("XAxis is not initialized yet");
// }
// protected checkNonNull(n :null | number):number{
// let r = 0;    
// if (n==null){
//     this.notInitError()
// }else {
//     r = n; 
// }
// return r;
// }
// protected xPercToPix(perc :number):number{
// let r = 0;
//     if (this.canvasWidth == null){
//         this.notInitError();
//     }else {
//         let checked = setBWzeroNhundred(perc);
//         r = Math.ceil((this.canvasWidth  /100) * checked); 
//     }
// return r;    
// }
// protected yPercToPix(perc :number):number{
// let r = 0;
//     if (this.canvasHeight == null){
//         this.notInitError();
//     }else {
//         let checked = setBWzeroNhundred(perc);
//         r = Math.ceil((this.canvasHeight/100) * checked); 
//     }
// return r;    
// }
// protected newIncrement(from :number,to :number,startValue :number,endValue :number){
//     let c = new Increment(from,to,startValue,endValue);
//     this.animations.push(c);    
// }    
// protected newDecrement(from :number,to :number,startValue :number,endValue :number){
//     let c = new Decrement(from,to,startValue,endValue);
//     this.animations.push(c);    
// }    
// } 