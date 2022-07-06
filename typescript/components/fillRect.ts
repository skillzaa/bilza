// import {Pack,BaseComponent,AniNumber} from "../bilza.js";
import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

export default class FillRect extends BaseComponent {
  
color :string;
constructor (color :string="#000000"){ 
super();
this.color = color ; 
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
        return Math.ceil((this.canvasWidth/100) * this.width.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
heightInPix(): number {
    if (this.canvasHeight !== null){
    return Math.ceil((this.canvasHeight/100)*this.height.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
draw(p:Pack):boolean{

this.applyRotation(p);
//--------------
this.style.fillStyle = this.color;    
this.style.globalAlpha = (this.opacity.value()/100);
// console.log("this.opacity.value()/100",this.opacity.value()/100);
// p.applyOpacity(this.opacity.value());
this.style.strokeStyle = this.color; 
// console.log("this.xRotateAligned()",this.xRotateAligned());
// console.log("this.xAligned()",this.xAligned());
//---------------------------------------
   p.drawFillRect(
     this.xAligned(),
     this.yAligned(),

    this.widthInPix(),
    this.heightInPix(),
    this.style
    );
//----------------------------
this.removeRotation(p);
this.style.globalAlpha = 1;
//----------------------------
return true;
}

}