import IComponent from "./IComponent.js";
import CoreProps from "../coreProps/corePropsDb.js";
import Alignment from "./alignment.js";
import ComponentPack from "../componentPack/componentPack.js";
import Component from "../engineComponent/engineComponent.js";

///////////////////////////////////////////////////
export default class ComponentDb extends CoreProps implements IComponent {
///////////////////////////////////////////////////

public readonly startTime :number;
public readonly endTime :number ;
public readonly insertAction :"add"|"append" | "alwaysOn";

private readonly canvasWidth :number;
private readonly canvasHeight :number;
public xAlign  : 0|1|2;  
public yAlign  : 0|1|2;  
public xRotate : 0|1|2;  
public yRotate : 0|1|2;  

////////////////////////////////////////
// public alignObj :Alignment;
// public alignRotateObj :Alignment;
///////////////////////////////////////////////////
constructor(startTime :number,endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append" | "alwaysOn"){
        
super();

this.xAlign = 0;        
this.yAlign = 0;
this.xRotate = 0;
this.yRotate = 0;

this.startTime = startTime;
this.endTime = endTime;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
this.canvasHeight = canvasHeight;
this.insertAction = insertAction;

}

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
contentHeight(): number {
    return this.height.value();
}
contentWidth(): number {
    return this.width.value();
}

compWidthPix():number{
    return 200;
}


compHeightPix():number{
    return 200;
}


contentWidthPix():number{
    return 200;
}



contentHeightPix():number{
    return 200;
}
////////////////////////////////////////////
getDuration():number{
    return 0;
}
public setxy(x :number, y :number | null=null){
    if (y ==null){y=x;}
this.x.set(x);
this.y.set(y);
}
getStartTime(inSec :boolean=true) :number{
    return  inSec ? this.startTime : (this.startTime * 1000);
}
getEndTime(inSec :boolean=true) :number{
    return inSec ? this.endTime : (this.endTime * 1000);
}


goto(atFrame :number,x :number , y :number):boolean{
    return true;
}


////////////////////////////////////////////    
////////////////////////////////////////////    
//@ts-expect-error
public getEngineComponent(componentPack :ComponentPack):Component{

}
////////////////////////////////////////////    
////////////////////////////////////////////    
}