import BaseFilter from "./baseFilter.js";
/**
 * 14-aug-2022
 * When we extend a generic base class we do 2 things
 * -- First we create a copy-paste version of the class with the desired type :T etc. This is the Generic part.
 * -- Second : We can over-ride any methods of the base class and this is the OO part.
 */  
export default class IdentityFil <T> extends BaseFilter <T>  {

constructor(rTimeMsStart :number,rTimeMsEnd :number,baseValue :T,delayInMS :number=0){
super(rTimeMsStart,rTimeMsEnd,baseValue,delayInMS);  
}

//--over written
public animatedValue(): T {
    return this.baseValue;
}

}