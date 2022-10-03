import Pack from "../../pack/pack.js";
import Component from "../../compEngine/compEngine.js";
import ComponentPack from "../../componentPack/componentPack.js";

import EngineComponent from "../../compEngine/compEngine.js";

// import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animations/animations.js";
////////////////////////////////////////////////////////

export default class Background extends EngineComponent {
  

constructor (componentPack :ComponentPack,color :string="#efeee3"){ 
    
super(componentPack);

this.drawLayer = 0;
this.color.set(color); 
}

draw(p:Pack):boolean{
p.drawBackground(this.color.value());
return true;
}

}