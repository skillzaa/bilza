
import {hsl} from "../../bilza.js";
import Arrow from "./arrow.js";

export default class TextTheme {
private comp:Arrow;    
constructor(comp :Arrow){
this.comp = comp;    
}

color(Hue_0_to_360 :number){
this.comp.color.set(hsl(Hue_0_to_360));    
return this.comp;   
}

}