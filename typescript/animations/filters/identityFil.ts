import BaseFilter from "./baseFilter.js";
/**
 * 14-aug-2022
 * When we extend a generic base class we do 2 things
 * -- First we create a copy-paste version of the class with the desired type :T etc. This is the Generic part.
 * -- Second : We can over-ride any methods of the base class and this is the OO part.
 */  

export default class IdentityFil <T> extends BaseFilter <T>  {

constructor(startTimeMs :number,endTimeMs :number,staticValue :T){
    super(startTimeMs,endTimeMs,staticValue,staticValue);  
    //--i dont need to but 
    this.setAfterValue(this.getEndValue());

}
//---i need to do nothing every filter except setting staticValue for startValue and endValue both.
//-- the _animatedValue is by default null so just the startValue goes out and since startValue was set = endValue this that is also beyond value

// public update(rTimeMs :number):boolean{
// //-- if its beyond or after let super.update take care of it    
// if (super.update(rTimeMs) == false ){ return false;}
// // 
// return true;
// }

}