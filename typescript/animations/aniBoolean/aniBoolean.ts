import AniProp from "../animationDesign/aniProp.js";
import Toogle from "./filters/toogle.js";
 

export default class AniBoolean extends AniProp <Boolean> {
 
update(msDelta :number):boolean{
super.update(msDelta);    
console.log("aniBoolean msDelta" , msDelta);
return true;
}
            
public toogle(startTimeSec :number,endTimeSec :number,skipXFrames :number=0){
const v = new Toogle(startTimeSec,endTimeSec,skipXFrames );
this.filters.push(v);
}

} 