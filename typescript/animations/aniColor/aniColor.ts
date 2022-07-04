import AniProp from "../animationDesign/aniProp.js";
import SetOnce from "./filters/setOnce_goto.js";
import RandomColor from "./filters/randomColor.js";
 

export default class AniColor extends AniProp <string> {
   
public goto(startTimeSec :number,theValue :string){
const v = new SetOnce(startTimeSec,theValue);
this.filters.push(v);
}
public random(startTimeSec :number,endTimeSec :number,everyXFrame :number=0){
    const v = new RandomColor(startTimeSec,endTimeSec,everyXFrame);
    this.filters.push(v);
    }

} 