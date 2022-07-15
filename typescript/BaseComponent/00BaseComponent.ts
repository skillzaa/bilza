import { IComponent,Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";

export default class BaseComponent extends RotateObj implements IComponent{
 
constructor (){
    super();

}

init(p: Pack): boolean {
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();

//--Only 6 classes need init x,y and 4 paddings
this.x.init(this.responsive,this.canvasWidth);//canvasWidth
this.y.init(this.responsive,this.canvasHeight);//canvasHeight
//paddings
this.paddingLeft.init(this.responsive,this.canvasWidth);
this.paddingRight.init(this.responsive,this.canvasWidth);
//--- DO NOT FEED CANVASWIDTH HERE its for canvasHeight
this.paddingTop.init(this.responsive,this.canvasHeight);
this.paddingBottom.init(this.responsive,this.canvasHeight);

return true;
}


update(msDelta :number,p :Pack): boolean {
    //--- 14-july-2022 : A total of 14 props need UPDATE
    this.x.update(msDelta);
    this.y.update(msDelta);
    //--6-july-2022 visible.update added
    this.visible.update(msDelta);
    this.rotation.update(msDelta);
    this.opacity.update(msDelta);
    this.width.update(msDelta);
    this.height.update(msDelta);

    this.paddingLeft.update(msDelta);
    this.paddingRight.update(msDelta);
    this.paddingTop.update(msDelta);
    this.paddingBottom.update(msDelta);

    this.border.update(msDelta);
    this.colorBackground.update(msDelta);
    this.colorBorder.update(msDelta);

return true;    
}
drawBackground(p :Pack){
//--This is the only place where we need to check this.showBackground     
if (this.showBackground.value() == false) {return;}    

this.style.fillStyle = this.colorBackground.value();    
this.style.strokeStyle = this.colorBackground.value();  

p.drawFillRect (this.xAligned(), this.yAligned(),
this.compWidth() , this.compHeight(),this.style);
}
//Border is not added into the width and height of a component.
drawBorder(p :Pack){
if (this.border.value() < 1) {return;}    
this.style.strokeStyle = this.colorBorder.value();  
this.style.fillStyle = this.colorBorder.value();  
this.style.lineWidth = this.border.value();    
    p.drawRect(
        //--border/2 is required since drawRect also act like line
        (this.xAligned() - Math.floor(this.border.value()/2)), 
        ( this.yAligned() - Math.floor(this.border.value()/2) ),
        //--- -1 is some error
        this.compWidth() + (this.border.value() -1 ) , 
        this.compHeight() + (this.border.value() -1 ),
        this.style);
} 
preDraw(p :Pack){
this.style.opacity = (this.opacity.value());
// this.style.opacity = 100;    
this.applyRotation(p);
this.drawBackground(p);
this.drawBorder(p);
}
postDraw(p :Pack){
this.style.opacity = 100;
this.removeRotation(p);
}
contentY():number{
//previous yAlignedPadded    
return this.yAligned() + this.paddingTop.value(); 
}
contentX():number{
//previous xAlignedPadded    
return this.xAligned() + this.paddingLeft.value(); 
}


////////////////////////////////////////////////////////
}//component ends 