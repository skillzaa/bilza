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
//--no need for init
// this.x.init(this.canvasWidth);//canvasWidth
// this.y.init(this.canvasHeight);//canvasHeight
//paddings
this.paddingLeft.init(this.canvasWidth);
this.paddingRight.init(this.canvasWidth);
//--- DO NOT FEED CANVASWIDTH HERE its for canvasHeight
this.paddingTop.init(this.canvasHeight);
this.paddingBottom.init(this.canvasHeight);

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
//15-july-2022. drawBackground completed do not change
drawBackground(p :Pack){
//--This is the only place where we need to check this.showBackground     
if (this.showBackground.value() == false) {return;}    

this.style.fillStyle = this.colorBackground.value();    
this.style.strokeStyle = this.colorBackground.value();  

p.drawFillRect (this.xAligned(), this.yAligned(),
this.compWidth() , this.compHeight(),this.style);
}
//15-july-2022. drawBorder completed do not change
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
//---15-july-2022 : seems final
preDraw(p :Pack){
this.style.opacity = (this.opacity.value());
// this.style.opacity = 100;    
this.applyRotation(p);
this.drawBackground(p);
this.drawBorder(p);
}
//---15-july-2022 : seems final
postDraw(p :Pack){
this.style.opacity = 100;
this.removeRotation(p);
}
//---15-july-2022 : seems final
contentY():number{
return this.yAligned() + this.paddingTop.value(); 
}
//---15-july-2022 : seems final
contentX():number{
//previous xAlignedPadded    
return this.xAligned() + this.paddingLeft.value(); 
}
////////////////////////////////////////////////////////
}//component ends 