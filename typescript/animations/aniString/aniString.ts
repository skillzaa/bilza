import AniProp from "../aniProp/aniProp.js";
import SetOnce from "./filters/setOnce_goto.js";
 

export default class AniString extends AniProp <string> {
   
public goto(startTimeSec :number,theValue :string){
const v = new SetOnce(startTimeSec,theValue);
this.filters.push(v);
}

} 