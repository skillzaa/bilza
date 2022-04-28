import lightenDarkenColor from "./lightenDarkenColor.js";
import setBWzeroNhundred from "./setBWzeroNhundred.js";
export default class Fn {    
    setBWzeroNhundred :(n :number)=>number;
    lightenDarkenColor :(col:string, amt:number)=>void;
constructor(){
this.setBWzeroNhundred = setBWzeroNhundred;
this.lightenDarkenColor = lightenDarkenColor;
}
}//class