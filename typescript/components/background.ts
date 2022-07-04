import {Pack,BaseComponent,DrawLayer} from "../bilza.js";
import AniColor from "../animations/aniColor/aniColor.js";

export default class Background extends BaseComponent {
  
public color:AniColor;

constructor (color :string="#efeee3"){ 
super();
this.drawLayer = DrawLayer.BackGround;
this.color = new AniColor(color); 
}
init(p: Pack): boolean {
super.init(p);
return true;
}

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
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