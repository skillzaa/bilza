import {DrawLayer} from "../design/drawLayer.js";
import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

import AniColor from "../animationsXXXX/aniColor/aniColor.js";
////////////////////////////////////////////////////////

export default class Background extends BaseComponent {
  

constructor (color :string="#efeee3"){ 
super();
this.drawLayer = DrawLayer.SystemBackGround;
this.color.set(color); 
}
init(p: Pack): boolean {
super.init(p);
return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    this.color.update(msDelta);
    return true;
}
widthInPix(): number {
    if (this.canvasWidth !== null ){
        return this.canvasWidth;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

heightInPix(): number {
    if (this.canvasHeight !== null){
    return this.canvasHeight;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
draw(p:Pack):boolean{
// this.style.fillStyle = this.color.value();    
// this.style.strokeStyle = this.color.value(); 

p.drawBackground(this.color.value());
return true;
}

}