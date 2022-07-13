// import {Pack,BaseComponent,AniNumber} from "../bilza.js";
import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import { AniBoolean,AniColor } from "../bilza.js";

export default class Circle extends BaseComponent {
  
// color :AniColor;//already has in base comp
filled :AniBoolean;
constructor (color :string="#000000"){ 
super();
this.color = new AniColor(color) ; 
this.filled = new AniBoolean(true);
}

widthInPix(): number {
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * (this.width.value()));
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    return this.widthInPix();
}
draw(p:Pack):boolean{

//--------------
this.style.fillStyle = this.color.value();    
this.style.opacity = (this.opacity.value());
// p.applyOpacity(this.opacity.value());
this.style.strokeStyle = this.color.value(); 
//---------------------------------------
p.beginPath();
p.drawCircle(
    this.xAligned() + (this.widthInPix()/2)  ,
    this.yAligned() + (this.widthInPix()/2),
    (this.widthInPix()/2), //since radius is halp of width
    this.filled.value(),
    0,
    2 * Math.PI,
    this.style
    );

// p.arc(100, 75, 50, 0, 2 * Math.PI);
p.stroke();
//----------------------------
// this.style.globalAlpha = 1;
//----------------------------
return true;
}

}