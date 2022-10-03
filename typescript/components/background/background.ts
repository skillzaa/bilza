import Pack from "../../pack/pack.js";
import Component from "../../compEngine/compEngine.js";

import EngineComponent from "../../compEngine/compEngine.js";

// import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animations/animations.js";
////////////////////////////////////////////////////////

export default class Background extends EngineComponent {
  

constructor (color :string="#efeee3"){ 
    
super();

this.drawLayer = 0;
this.color.set(color); 
}

draw(p:Pack):boolean{
p.drawBackground(this.color.value());
return true;
}

}