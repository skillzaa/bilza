import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";

export default class FillRect extends BaseComponent {
  
constructor (color :string="#000000"){ 
    super();
    this.color.set(color) ; 
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
return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value() ;
}

contentWidth(): number {
    if (this.canvasWidth !== null ){
        return Math.ceil((this.canvasWidth/100) * this.width.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

heightInPix(): number {
return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
}

contentHeight(): number {
    if (this.canvasHeight !== null){
    return Math.ceil((this.canvasHeight/100)*this.height.value());
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
draw(p:Pack):boolean{
this.preDraw();
this.applyRotation(p);
//--------------
//--why is this line needed at the top of every draw fn
this.style.opacity = this.opacity.value();
this.drawBackground(p);
this.drawBorder(p);
//--------------
this.style.fillStyle = this.color.value();    
// console.log("this.opacity.value()/100",this.opacity.value()/100);
// p.applyOpacity(this.opacity.value());
this.style.strokeStyle = this.color.value(); 
// console.log("this.xRotateAligned()",this.xRotateAligned());
// console.log("this.xAligned()",this.xAligned());
//---------------------------------------
   p.drawFillRect(
     this.xAlignedPadded(),
     this.yAlignedPadded(),

    this.contentWidth(),
    this.contentHeight(),
    this.style
    );
//----------------------------
this.removeRotation(p);
this.postDraw()
// this.style.opacity = 100;
//----------------------------
return true;
}

}