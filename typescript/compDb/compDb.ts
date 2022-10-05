import CoreProps from "./corePropsDb.js";
import CompEngine from "../compEngine/compEngine.js";
import Pack from "../pack/pack.js";

import IComponent from "./IComponent.js";
///////////////////////////////////////////////////
export default class CompDb extends CoreProps implements IComponent {
///////////////////////////////////////////////////
///////////////////////////////////////////////////
constructor(startTime :number,endTime :number,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number, canvasHeight :number){      

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
////////--set some props as responsive by default
this.setRespDims(true);
this.setRespLoc(true);
}
////////////////////////////////////////////////
public align(x : 0|1|2|null=null, y :0|1|2|null=null){
if (x !== null){
    this.xAlign = x;                   
}    
if (y !== null){
    this.yAlign = y;                   
}       
}
public alignRotate(x : 0|1|2|null=null, y :0|1|2|null=null){
if (x !== null){
    this.xRotate = x;                   
}    
if (y !== null){
    this.yRotate = y;                   
}           

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
    y = y - (this.compHeight()/2);    
    break;
    case 2:
    y = y - this.compHeight();    
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
public setPaddings(n :number){
this.paddingLeft.set(n);
this.paddingRight.set(n);
this.paddingTop.set(n);
this.paddingBottom.set(n);
}

animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
this.x.animate(timeFrom,timeTo,xFrom,xTo);    
this.y.animate(timeFrom,timeTo,yFrom,yTo);    
return true;    
}

compWidth(): number {
    //--Border is not included so border will grow outward where as the internal area of box is just padding from 4 sides and the content area in between.
    return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value();
}   
compHeight(): number {
//--Border is not included    
return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
}
//--if the comp with and height is not = to width/height then override
contentHeight(): number {
    return this.height.value();
}
contentWidth(): number {
    return this.width.value();
}

////////----//////////////
getDuration():number{
    return this.endTime - this.startTime;
}
///?????????????????????????????????????????????????????????????
goto(atFrame :number,x :number , y :number):boolean{
this.x.goto(atFrame,x);    
this.y.goto(atFrame,y);    
return true;
}

public setxy(x :number, y :number){
    // if (y ==null){y=x;}
this.x.set(x);
this.y.set(y);
}
getStartTime(inSec :boolean=true) :number{
    return  inSec ? this.startTime : (this.startTime * 1000);
}
getEndTime(inSec :boolean=true) :number{
    return inSec ? this.endTime : (this.endTime * 1000);
}

setRespLoc(tf: boolean): boolean {
this.x.setResp(tf, this.canvasWidth);    
this.y.setResp(tf , this.canvasHeight);    
return tf;    
}

setRespDims(tf: boolean): boolean {
this.width.setResp(tf, this.canvasWidth);    
this.height.setResp(tf , this.canvasHeight);    
//--All padding are set resp to width since then they will be equal
this.paddingLeft.setResp(tf,this.canvasWidth);    
this.paddingRight.setResp(tf,this.canvasWidth);    
this.paddingTop.setResp(tf,this.canvasWidth);    
this.paddingBottom.setResp(tf,this.canvasWidth);    
return tf;        
}

//--dont remove but its bad design
//@ts-expect-error
getEngineComp(pack :Pack):CompEngine{
  
 }

////////////////////////////////////////////    
////////////////////////////////////////////    

////////////////////////////////////////////    
////////////////////////////////////////////    
}