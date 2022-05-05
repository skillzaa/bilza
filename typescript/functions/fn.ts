import lightenDarkenColor from "./lightenDarkenColor.js";
import setBWzeroNhundred from "./setBWzeroNhundred.js";
import aspectRatioHeight from "./aspectRatioHeight.js";
// import getHexColor from "./getHexColor.js";
export default class Fn {    
    // getHexColor :(colorName :string)=>string;
    setBWzeroNhundred :(n :number)=>number;
    aspectRatioHeight :(width :number)=>number;
    lightenDarkenColor :(colorHax:string, amt:number)=>void;
constructor(){
this.setBWzeroNhundred = setBWzeroNhundred;
this.lightenDarkenColor = lightenDarkenColor;
this.aspectRatioHeight = aspectRatioHeight;
// this.getHexColor = getHexColor;
}
}//class