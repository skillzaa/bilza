
// // import {FontFamily} from "../bilza.js";
// // import Text from "../components/text.js";
// //---dont use bilza i may remove that
// import Component from "../component/component.js";

// export default class EntryAniPresets {
// private  comp:Component;    

// constructor(comp :Component){
// this.comp = comp;    
// }
// leftIn(){
    
// //---what ever the alignment it does not matter even if the align is right still - width takes care of that   
// this.comp.x.animate(this.comp.time.getStart(true),this.comp.time.getStart(true) + 2,-this.comp.compWidth(),this.comp.x.valueNR());
// return this.comp;    
// }
// rightIn(){
// this.comp.x.animate(
//     this.comp.time.getStart(true),
//     this.comp.time.getStart(true)+1,
// 100 + this.comp.width.value(), 
// this.comp.x.value()
// );
// return this.comp;    
// }

// bottomIn(){
//     this.comp.y.animate(
//         this.comp.time.getStart(true),
//         this.comp.time.getStart(true)+1,
//         100 + this.comp.height.value(), 
//         this.comp.y.value()
//     );
// return this.comp;    
// }
// topIn(){
//     this.comp.y.animate(
//     this.comp.time.getStart(true),
//     this.comp.time.getStart(true)+1,
//     ( -1 * (this.comp.height.value() * 3) ) ,
//     this.comp.y.value()
//     );
// return this.comp;    
// }

// fadeIn(){
//     this.comp.opacity.animate(
//         this.comp.time.getStart(true),
//         this.comp.time.getStart(true)+1,
//     0,100
//     );
// return this.comp;    
// }
// /////////////////////////////////////////////////
// }