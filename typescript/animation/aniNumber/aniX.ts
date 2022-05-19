// // import AnimationEntry from "./animationEntry.js";
// import IFilter from "./IFilter.js";
// import Adder from "./adder.js";
// import Increment from "./increment.js";
// import { Pack } from "../../Bilza.js";

// export default class AniNumber{

// public useRelativeXY :boolean;    
// private animations :IFilter[];
// private val :number;
// private readonly INITALVALUE :number;

// //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// constructor(initalValue :number){
// this.INITALVALUE = initalValue; 
// this.val = initalValue; 
// this.useRelativeXY = false; 
// this.animations = []; 
// }
// //zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
// update(msDelta :number,p :Pack){
// // if (this.animations.length < 1) {
// //     this.val = this.INITALVALUE; 
// // } 

// for (let i = 0; i < this.animations.length; i++) {
//         const ani = this.animations[i];
//         ani.update(msDelta);
//         let v  = ani.value(); 
//         if ( v != null){
//             if (this.useRelativeXY == true){
//                 this.val = p.xPerc(v);
//             }else {
//                 this.val = v;
//             }
//         }
// }    
    
// }
// value(){
// return this.val;
// }

// public increment(from :number=0,to :number=10,startValue :number=0,endValue :number=100){
//     if (this.useRelativeXY == true){
//         let a = new Increment(p.xPerc(from),p.xPerc(to),startValue,endValue);
//         this.animations.push(a);
//     }else {
//         let a = new Increment(from,to,startValue,endValue);
//         this.animations.push(a);
//     }
// }
// public setValue(n :number):number{
// this.val = n;
// return this.val;
// }
// } 