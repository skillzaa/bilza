import {Style,Pack,IComponent,DrawLayer,Transition,IMsStart} from "./Bilza.js";
import CompDataBase from "./design/CompDataBase.js";
//--This is an Abstract class
export default class Component  <T extends CompDataBase> implements IComponent {
//compData is the transition object and T is the obj it takes in
// a transition group all the public properties in this.d and expose them. the user can then add different set of these properties which are then implemented (merged) as per the given millisecond.
public compData:Transition<T>; 
// this d and the data will point to the T object inside compData,to 
// expose them and remove this.compData.data.x into this.d.x or 
// this.data.x
public d :T;
/**
 * why it is so important to place some data into this.d.xyz ?
 * Answer: The data inside this.d == reactive data. These are the buttons and numbers to which the tool reacts AND THAT MAKES THE ENTIRE LIBRARY REACTIVE.
 */
public data :T;
//........??????????????????
//--id is read only--if we serialize it the id persists. it is globally unique
public readonly id :string;
//--we have three layers so far but we can add as many as we want.
//--infect we can have different type of components????? 
//e.g the background tools does not have x and y etc.?????
//--we do not keep x and y in component since all tools dont need it
public drawLayer : DrawLayer; 
//--using properties like display etc we can add effects e.g blinking
protected display :boolean;
//--this will come in handy during using the lib with gui and while making interactive tools.
protected selected :boolean;
//----------------------
protected msStart :number;   
protected msEnd :number;
//--previously I was using many style obj in my component sub-classes but now i have atleast one this.style available, if a component sub-classes (tool class) wants it can have its own styles as well. loose coupling.
public style:Style;
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
constructor (DataFn :()=>T,msStart=0,msEnd= Number.MAX_SAFE_INTEGER){
this.compData = new Transition(DataFn);    
this.d = this.compData.data;
this.data = this.compData.data;
//--------------------------------
//--must
this.drawLayer = DrawLayer.MiddleGround;
//--must
this.id = Math.random().toString(36).slice(2);

this.style = new Style(); 

this.display = true;
this.selected = false;

this.msStart = msStart; //typescript deamnds it
this.msEnd = msEnd;
this.setStartTime(msStart);//in future i may run some otehr code in these fn
this.setEndTime(msEnd);
}
getSelected() :boolean{
return this.selected;
}
setSelected(b :boolean):boolean{
this.selected = b;
return this.selected;
}
getDisplay() :boolean{
return this.display;
}
setDisplay(b :boolean):boolean{
this.display = b;
return this.display;
}
getStartTime() :number{
return this.msStart;
}
setStartTime(n :number=0):number{
this.msStart = n;
return n;
}
getEndTime() :number{
    return this.msEnd;
}
setEndTime(n :number=Number.MAX_SAFE_INTEGER):number{
this.msEnd = n;
return n;
}

width(p: Pack): number {
    return 0;
}
height(p: Pack): number {
    return 0;
}

// brilent do not send frame in draw args just send frame in update-
draw(p: Pack): boolean {
    return true;
}
update(msDelta :number, p: Pack): boolean {
return true;    
}
////////////////////////////////////////////////////////
// following methods are not IComponent
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
setShadow(shadowBlur :number=8,shadowOffsetX :number=10,shadowOffsetY :number =10,shadowColor :string ="#ada6a6" ){
this.style.shadowBlur = shadowBlur;
this.style.shadowOffsetX = shadowOffsetX;
this.style.shadowOffsetY = shadowOffsetY;
this.style.shadowColor = shadowColor;
}
shadowsOn(){
    this.style.shadowBlur = 8;
    this.style.shadowOffsetX = 10;
    this.style.shadowOffsetY = 10;
    this.style.shadowColor = "#ada6a6";
}
resize(width :number,height :number):number{
 return 0;
}
drawBoundingRectangle(p :Pack) :boolean{
this.style.strokeStyle = "black";    
p.drawRect(p.xPerc(this.d.x),p.yPerc(this.d.y),this.width(p),this.height(p),this.style);
return true;
}

////////////////////////////////////////////////////////
}//component ends