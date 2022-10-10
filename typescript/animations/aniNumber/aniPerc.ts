import AniProp from "../aniProp/aniProp.js";
import { AniPercDb } from "../../animations/animations.js";

export default class AniPerc extends AniProp <number>{

private theWhole : number;
// ---------------------------------     
constructor(aniPercDb :AniPercDb){
//--here when we feed aniPercDb to super the AniProp will get its value but that is the wrong value so we again give it the Percentage value    
super(aniPercDb)
this.defaultValue = aniPercDb.valuePerc(); 
//@ts-expect-error
this._value = null;
this.theWhole = aniPercDb.getTheWhole();
}
//////////////////////////////////////////////
public value():number{
    return this.responsiveValue(super.value());        
}

public valuePerc():number{
    return super.value();
 
}
private responsiveValue(perc :number):number {
    if (this.theWhole == null){throw new Error("init error");}
        return ((this.theWhole / 100) * perc);
}
///////////////////////////////////////////
///////////////////////////////////////////
}