import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import ComponentPack from "../compiler/componentPack.js";

// import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animations/animations.js";
////////////////////////////////////////////////////////

export default class Background extends Component {
  

constructor (startTime :number,endTime :number,componentPack :ComponentPack,color :string="#efeee3"){ 
super(startTime,endTime,componentPack);

this.drawLayer = 0;
this.color.set(color); 
}

draw(p:Pack):boolean{
p.drawBackground(this.color.value());
return true;
}

}