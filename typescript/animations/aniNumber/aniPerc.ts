import AniProp from "../aniProp/aniProp.js";
import { AniPercDb } from "../../animations/animations.js";

export default class AniPerc extends AniProp <number>{

private readonly theWhole : number;
// ---------------------------------     
constructor(aniPercDb :AniPercDb){
    super(aniPercDb);
//--This makes this the AniPerc    
this.theWhole = aniPercDb.getTheWhole();
}
//////////////////////////////////////////////
public value():number{
    return this.responsiveValue(super.value());        
}
//---? what does this do
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