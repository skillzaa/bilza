
import {FontFamily} from "../../bilza.js";
import Arrow from "./arrow.js";

export default class Templ {
private  comp:Arrow;    


constructor(comp :Arrow){
this.comp = comp;    
}

spear(){
    this.comp.headWidth.set(60);
    this.comp.headHeight.set(10);
    this.comp.headFilled.set(false);
    return this.comp;
}
fat(){
    this.comp.lineWidth.set(8);
    this.comp.headWidth.set(30);
    this.comp.headHeight.set(40);
    this.comp.headFilled.set(true);
    return this.comp;
}

}