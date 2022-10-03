import Pack from "../pack/pack.js";
import CompEngineCore from "./compEngineCore.js";
import CorePropsDb from "../compDb/corePropsDb";

export default class CompEngine extends CompEngineCore {

// /xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor(compDb :CorePropsDb,pack :Pack){
super(compDb,pack); 

}
protected preDrawNonBoxed(p :Pack){
this.style.opacity = (this.opacity.value());
this.applyRotation(p);
}
//////////////////////////////////////////
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
public canvasWidth():number{
    return this._canvasWidth;
}
public canvasHeight():number{
return this._canvasHeight;
}
public draw(p :Pack):boolean{
    return true;
}
goto(atFrame: number, x: number, y: number): boolean {
this.x.goto(atFrame,x);
this.y.goto(atFrame,y);
return true;    
}
// animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
// this.x.animate(timeFrom,timeTo,xFrom,xTo);    
// this.y.animate(timeFrom,timeTo,yFrom,yTo);    
// return true;    
// }
///////////////////protected 
protected preDraw(p :Pack){
this.style.opacity = (this.opacity.value());
// this.style.opacity = 100;    
this.applyRotation(p);
this.drawBackground(p);
this.drawBorder(p);    
}
protected postDraw(p :Pack){
this.style.opacity = 100;
this.removeRotation(p);
}
protected contentX():number{
    return this.yAligned() + this.paddingTop.value(); 
}
protected contentY():number{
    return this.xAligned() + this.paddingLeft.value();
}
///////////////////////////////////////////    
protected applyRotation(p :Pack){
    p.save();    
    p.translate(this.xRotateAligned() , this.yRotateAligned() );
    p.rotate(this.rotation.value());
    p.translate(-this.xRotateAligned() , -this.yRotateAligned() );    
// console.log("this.rotation.value()",this.rotation.value());
}
protected removeRotation(p :Pack){
    // p.rotate(this.rotation,true);
    p.restore();
}
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

xRotateAligned():number{   
let x = this.xAligned();     
switch (this.xRotate) {  
    case 0 :
    //--nothing        
    break;
    case 1:
    x = x + (this.compWidth()/2);    
    break;
    case 2:
    x = x + this.compWidth();    
    break;
}
return x;    
}
yRotateAligned():number{   
let y = this.yAligned();     
switch (this.yRotate) {   
    case 0 :
    //--nothing        
    break;
    case 1:
    y = y + (this.compHeight()/2);    
    break;
    case 2:
    y = y + this.compHeight();    
    break;
}
return y;    
}
xAligned():number{   
let x = this.x.value();     
switch (this.xAlign) {
    
    case 0 :
    //--nothing        
    break;
    case 1:
    x = x - (this.compWidth()/2);    
    break;
    case 2:
    x = x - this.compWidth();    
    break;
}
return x;    
}
yAligned():number{   
let y = this.y.value();     
switch (this.yAlign) {   
    case 0:
    //--nothing        
    break;
    case 1:
    y = y - (this.compHeight()/2);    
    break;
    case 2:
    y = y - this.compHeight();    
    break;
}
return y;    
}
compWidth(): number {
    //--Border is not included so border will grow outward where as the internal area of box is just padding from 4 sides and the content area in between.
    return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value();
}   
compHeight(): number {
//--Border is not included    
return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
}
contentHeight(): number {
    return this.height.value();
}
contentWidth(): number {
    return this.width.value();
}


///////////////////////////////////////////    
}//class