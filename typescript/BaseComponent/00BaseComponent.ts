import { IComponent,Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";
import { AniPerc } from "../animationModule/animations.js";

export default class BaseComponent extends RotateObj implements IComponent{
//-its nec to keep canvas width and height here to keep them private    
//---these 2 variables will be set in init
private _canvasWidth :number | null;    
private _canvasHeight :number | null;    
constructor (){
super();
this._canvasWidth = null;    
this._canvasHeight = null;    

}

init(p: Pack): boolean {
this._canvasWidth =  p.canvasWidth();  
this._canvasHeight =  p.canvasHeight();

if (this.width instanceof AniPerc && this.height instanceof AniPerc){
    this.width.init(this.canvasWidth());//canvasWidth
    this.height.init(this.canvasHeight());//canvasHeight
}

if (this.x instanceof AniPerc && this.y instanceof AniPerc){
    this.x.init(this.canvasWidth());//canvasWidth
    this.y.init(this.canvasHeight());//canvasHeight
}
//paddings
if (this.paddingLeft instanceof AniPerc &&
    this.paddingRight instanceof AniPerc &&
    this.paddingTop instanceof AniPerc &&
    this.paddingBottom instanceof AniPerc ){
    
    this.paddingLeft.init(this.canvasWidth());
    this.paddingRight.init(this.canvasWidth());
    //--- DO NOT FEED CANVASWIDTH HERE its for canvasHeight
    this.paddingTop.init(this.canvasHeight());
    this.paddingBottom.init(this.canvasHeight());
    }
return true;
}


update(msDelta :number,p :Pack): boolean {
    //--- 15-july-2022 : A total of 15 props need UPDATE
    //--19-Aug-2022-color added to make it 15 total
    this.color.update(msDelta);
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
protected drawBackground(p :Pack){
//--This is the only place where we need to check this.showBackground     
if (this.showBackground.value() == false) {return;}    

this.style.fillStyle = this.colorBackground.value();    
this.style.strokeStyle = this.colorBackground.value();  

p.drawFillRect (this.xAligned(), this.yAligned(),
this.compWidth(), 
this.compHeight(),
this.style);
}
//15-july-2022. drawBorder completed do not change
//Border is not added into the width and height of a component.
protected drawBorder(p :Pack){
if (this.border.value() < 1) {return;}    
this.style.strokeStyle = this.colorBorder.value();  
this.style.fillStyle = this.colorBorder.value();  
this.style.lineWidth = this.border.value();    
    p.drawRect(
        //--border/2 is required since drawRect also act like line
        (this.xAligned() - Math.floor(this.border.value()/2)), 
        ( this.yAligned() - Math.floor(this.border.value()/2) ),
        //--- -1 is some error
        this.compWidth() + Math.floor(this.border.value()-1) , 
        this.compHeight() + Math.floor(this.border.value()-1) ,
        this.style);
} 
protected drawContentAreaBorder(p :Pack){
if (this.borderContentArea.value() < 1) {return;}    
this.style.strokeStyle = this.colorContentAreaBorder.value();  
this.style.fillStyle = this.colorContentAreaBorder.value();  
this.style.lineWidth = this.borderContentArea.value();    
    p.drawRect(
        //--border/2 is required since drawRect also act like line
        (this.contentX() - Math.floor(this.borderContentArea.value()/2)), 
        ( this.contentY() - Math.floor(this.borderContentArea.value()/2) ),
        //--- -1 is some error
        this.contentWidth() + Math.floor(this.borderContentArea.value()-1) , 
        this.contentHeight() + Math.floor(this.borderContentArea.value()-1) ,
        this.style);
} 
//---15-july-2022 : seems final
protected preDraw(p :Pack){
this.style.opacity = (this.opacity.value());
// this.style.opacity = 100;    
this.applyRotation(p);
this.drawBackground(p);
this.drawBorder(p);
}
//---15-july-2022 : seems final
protected postDraw(p :Pack){
this.style.opacity = 100;
this.removeRotation(p);
}
//---15-july-2022 : seems final
protected contentY():number{
return this.yAligned() + this.paddingTop.value(); 
}
//---15-july-2022 : seems final
protected contentX():number{
//previous xAlignedPadded    
return this.xAligned() + this.paddingLeft.value(); 
}
////////////////////////////////////////////////////////
// protected adjestFontSize(n :number):number{
//     if (this.canvasWidth == null){
//         throw new Error("init error");}    
//     return (n/1000) * this.canvasWidth;
// } 
public setPaddings(n :number){
this.paddingLeft.set(n);
this.paddingRight.set(n);
this.paddingTop.set(n);
this.paddingBottom.set(n);
}
public setxy(x :number, y :number | null=null){
    if (y ==null){y=x;}
this.x.set(x);
this.y.set(y);
}
canvasHeight():number{
if (this._canvasHeight == null) { throw new Error("the lib may not be initiailzed yet");
}    
return this._canvasHeight;
}
canvasWidth():number{
if (this._canvasWidth == null) { throw new Error("the lib may not be initiailzed yet");
}    
return this._canvasWidth;
}
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
}//component ends 