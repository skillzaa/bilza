import lightenDarkenColor from "./lightenDarkenColor.js";
import setBWzeroNhundred from "./setBWzeroNhundred.js";
import aspectRatioHeight from "./aspectRatioHeight.js";
export default class Fn {    
    setBWzeroNhundred :(n :number)=>number;
    aspectRatioHeight :(width :number)=>number;
    lightenDarkenColor :(colorHax:string, amt:number)=>void;
constructor(){
this.setBWzeroNhundred = setBWzeroNhundred;
this.lightenDarkenColor = lightenDarkenColor;
this.aspectRatioHeight = aspectRatioHeight;
}
}//class