import CoreProps from "./corePropsDb.js";
import CompEngine from "../compEngine/compEngine.js";
import Pack from "../pack/pack.js";
import IComponent from "./IComponent.js";
import Linker from "../facade/linker.js";
import EntryAni from "../aniTempl/entryAni.js";
import ExitAni from "../aniTempl/exitAni.js";
///////////////////////////////////////////////////
export default class CompDb extends CoreProps implements IComponent {
///////////////////////////////////////////////////
public entryAni :EntryAni;
public exitAni :ExitAni;

constructor(linker :Linker){      

super(linker);
//---Objects
this.entryAni = new EntryAni(this);
this.exitAni = new ExitAni(this);

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
public setPaddings(n :number):IComponent{
this.paddingLeft.set(n);
this.paddingRight.set(n);
this.paddingTop.set(n);
this.paddingBottom.set(n);
return this;
}
animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
this.x.animate(timeFrom,timeTo,xFrom,xTo);    
this.y.animate(timeFrom,timeTo,yFrom,yTo);    
return true;    
}
compWidth(): number {
return  this.contentWidth() + this.paddingLeft.valuePerc() + this.paddingRight.valuePerc();
}   
compHeight(): number {
return this.contentHeight() + this.paddingTop.valuePerc() + this.paddingBottom.valuePerc();
}
contentHeight(): number {
    return this.height.valuePerc();
}
contentWidth(): number {
    return this.width.valuePerc();
}
getDuration():number{
    return this.endTime - this.startTime;
}
///?????????????????????????????????????????????????????????????
goto(atFrame :number,x :number , y :number):boolean{
this.x.goto(atFrame,x);    
this.y.goto(atFrame,y);    
return true;
}

public setxy(x :number, y :number | null =null):IComponent{
    if (y ==null){y=x;}
this.x.set(x);
this.y.set(y);
return this;
}
public setWdHt(width :number | null=null, height :number | null =null):IComponent{
if (width !==null){this.width.set(width);}
if (height !==null){this.height.set(height);}
return this;
}
public sexy(x :number, y :number | null =null):IComponent{
    this.setxy(x,y);
    return this;
}
getStartTime(inSec :boolean=true) :number{
    return  inSec ? this.startTime : (this.startTime * 1000);
}
getEndTime(inSec :boolean=true) :number{
    return inSec ? this.endTime : (this.endTime * 1000);
}
/**
 * rightEdge : This will remove the effects of "align". The returned number is the percent of screen width (on x axis) at which the comp will have its fathest edge touching the canvas right edge.
 *  
 */
rightEdge():number{
let x = 100;     
switch (this.xAlign) {
    case 0 :
    x = x - this.compWidth();         
    //--nothing        
    break;
    case 1:
    x = x - (this.compWidth()/2);    
    break;
    case 2:
    break;
}
return x;    
}
bottomEdge():number{
let x = 100;     
switch (this.yAlign) {
    case 0 :
    x = x - this.compHeight();         
    //--nothing        
    break;
    case 1:
    x = x - (this.compHeight()/2);    
    break;
    case 2:
    break;
}
return x;    
}
//--dont remove but its bad design
//@ts-expect-error
getEngineComp(pack :Pack):CompEngine{}
////////////////////////////////////////////    
}