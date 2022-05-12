import {Style,Pack,IComponent,DrawLayer,Transition,IMsStart} from "../Bilza.js";
import CompDataBase from "./CompDataBase.js";
import {XAlignment} from "./xAlignment.js";
import {YAlignment} from "./yAlignment.js";
import {InsertTypeOptions} from "./insertTypeOptions.js";
//--This is an Abstract class
export default class Component  <T extends CompDataBase> implements IComponent {
//compData is the transition object and T is the obj it takes in
// a transition group all the public properties in this.d and expose them. the user can then add different set of these properties which are then implemented (merged) as per the given millisecond.
protected compData:Transition<T>; 
// this d and the data will point to the T object inside compData,to 
// expose them and remove this.compData.data.x into this.d.x or 
// this.data.x
public d :T;
/**
 * why it is so important to place  data into this.d.xyz and not directly into the component class ?
 * Answer: The data inside this.d == reactive data. These are the buttons and numbers to which the tool reacts AND THAT MAKES THE ENTIRE LIBRARY REACTIVE. So we need to pass the data of the component as a seperate object.
 */
public data :T;
//--id is read only--if we serialize it the id persists. it is globally unique
public readonly id :string;
//--we have three layers so far but we can add as many as we want.
//--infect we can have different type of components????? 
//e.g the background tools does not have x and y etc.?????
//--we do not keep x and y in component since all tools dont need it
public drawLayer : DrawLayer; 
//----------------------
//---??? what exactly is this msStart???????????????
// protected msStart :number;   
//--previously I was using many style obj in my component sub-classes but now i have atleast one this.style available, if a component sub-classes (tool class) wants it can have its own styles as well. loose coupling.
public style:Style;
//-----Alignment
public readonly xAlignmentOptions:typeof XAlignment;   
public readonly yAlignmentOptions:typeof YAlignment;  
public readonly insertTypeOptions:typeof InsertTypeOptions; //these r options list 

//----Display Type and Timing Options
public insertType :InsertTypeOptions;

/////////////////----PRIVATE----///////////////////
//---11-5-2022 --ooo its private not protected.it means the child comp
// can not chane this behaviour.
private readonly DURATION :number; 
////use setStartTime() since engine will set _startTime, where as the comp endTime using dyn cal getEndTime();
private _startTime :number; 
//no end time
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//--KEEP COMP drfault duration at 10 sec
constructor (DataFn :()=>T,duration :number=10){

this.xAlignmentOptions = XAlignment; //final-ok
this.yAlignmentOptions = YAlignment; //final-ok
this.insertTypeOptions = InsertTypeOptions; //final-ok
this.insertType = this.insertTypeOptions.Insert; //Insert = default
this.DURATION = duration; //can not be changed again even not by children comps
this._startTime = 0; //final-ok
//--there is no this.endTime --since has this.endTime()
this.compData = new Transition(DataFn);    
this.d = this.compData.data;
this.data = this.compData.data;
//--------------------------------
//--must
this.drawLayer = DrawLayer.MiddleGround;
//--must
this.id = Math.random().toString(36).slice(2);

this.style = new Style(); 

// this.msStart = 0; //typescript deamnds it
}

width(p: Pack): number {
    return 0;
}
height(p: Pack): number {
    return 0;
}

// brilent do not send frame in draw args just send frame in update-
init(p: Pack): boolean {
    // console.log(this.id,"init");
    return true;
}
draw(p: Pack): boolean {
    return true;
}
update(msDelta :number, p: Pack): boolean {
return true;    
}
log(msg :string){
    console.log(msg);
}
////////////////////////////////////////////////////////
addTransition(msStart:number){
    return this.compData.add(msStart);
}    
checkCollision(x: number, y: number, p: Pack): boolean {
    return false;
}
shadowsOff(){
this.style.shadowBlur = 0;
this.style.shadowOffsetX = 0;
this.style.shadowOffsetY = 0;
}
setShadow(shadowBlur :number=8,shadowOffsetX :number=10,shadowOffsetY :number =10,shadowColor :string ="grey"){
this.style.shadowBlur = shadowBlur;
this.style.shadowOffsetX = shadowOffsetX;
this.style.shadowOffsetY = shadowOffsetY;
this.style.shadowColor = shadowColor;
}
shadowsOn(){
    this.style.shadowBlur = 8;
    this.style.shadowOffsetX = 10;
    this.style.shadowOffsetY = 10;
    this.style.shadowColor = "grey";
}
resize(width :number,height :number):number{
 return 0;
}
drawBoundingRectangle(p :Pack) :boolean{
this.style.strokeStyle = "black";    
p.drawRect(p.xPerc(this.d.x),p.yPerc(this.d.y),this.width(p),this.height(p),this.style);
return true;
}

applyTransition(msDelta :number){
    this.compData.apply(msDelta);
}

protected xAfterAlignment(p :Pack):number{
let x = this.d.x; //does  not change the orignal X   
        if (this.d.useRelativeXY == true){
            x =   p.xPerc(this.d.x);  
        }    
switch (this.d.xAlignment) {
    case this.xAlignmentOptions.Left:
        
        break;
    case this.xAlignmentOptions.Mid:
         x = Math.floor(x - ((this.width(p)/2)));
        break;
    
    case this.xAlignmentOptions.Right:
        Math.floor(x - (this.width(p)));
        break;
}
return x ;
}
protected yAfterAlignment(p :Pack):number{
    let y = this.d.y;    
        if (this.d.useRelativeXY == true){
            y =   p.yPerc(this.d.y);  
        }    

switch (this.d.yAlignment) {
    case this.yAlignmentOptions.Top:
        break;
    case this.yAlignmentOptions.Mid:
         y = Math.floor(y - ((this.height(p)/2)));
        break;
    
    case this.yAlignmentOptions.Bot:
        y = Math.floor(y - (this.height(p)));
        break;
}
return y ;
}
getEndTime(inMilliSec :boolean = true) :number{
let r = this._startTime + this.DURATION; //both r in sec
return inMilliSec ? (r * 1000) : r;
}
duration():number{
    return this.DURATION;
}
getStartTime(inMilliSec :boolean = true) :number{
return inMilliSec ? (this._startTime * 1000) : this._startTime;    
}
setStartTime(n :number):number{
this._startTime = n;
return this._startTime;
}
////////////////////////////////////////////////////////
}//component ends