import {DrawLayer} from "../design/drawLayer.js";
import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

// import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
////////////////////////////////////////////////////////

export default class Background extends BaseComponent {
  

constructor (color :string="#efeee3"){ 
super();
this.drawLayer = DrawLayer.SystemBackGround;
this.color.set(color); 
}

draw(p:Pack):boolean{
p.drawBackground(this.color.value());
return true;
}

}