import {Pack,IComponent,DrawLayer} from "../Bilza.js";
import Style from "../design/style.js";
import Props from "./BaseProps.js";
import {XAlignment} from "./xAlignment.js";
import {YAlignment} from "./yAlignment.js";
// import {InsertTypeOptions} from "./insertTypeOptions.js";
//--This is an Abstract class
export default class Component  implements IComponent {

public props :Props;
public  p:Props;
//--id is read only--if we serialize it the id persists. it is globally unique
public readonly id :string;
//--we have three layers so far but we can add as many as we want.
//--infect we can have different type of components????? 
//e.g the background tools does not have x and y etc.?????
//--we do not keep x and y in component since all tools dont need it
public drawLayer : DrawLayer; 
//--previously I was using many style obj in my component sub-classes but now i have atleast one this.style available, if a component sub-classes (tool class) wants it can have its own styles as well. loose coupling.
public style:Style;
//-----Alignment
public readonly xAlignmentOptions:typeof XAlignment;   
public readonly yAlignmentOptions:typeof YAlignment;  
/////////////////----PRIVATE----///////////////////
//---11-5-2022 --ooo its private not protected.it means the child comp
// can not chane this behaviour.
public  duration :number;  
//--this was previously _startTime but actually insertTimeInVid now, this show the point at which this comp will be inserted into the overall video. Inside a container Component this insert time is implemented by comtainer component. 
private  insertTimeInVid:number; 
public alwaysOn: boolean;
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//--KEEP COMP drfault duration at 10 sec
constructor (){
    this.props = new Props();    
    this.p = this.props;
    this.alwaysOn = false;
this.xAlignmentOptions = XAlignment; //final-ok
this.yAlignmentOptions = YAlignment; //final-ok
this.duration = 0; //can not be changed again even not by children comps
this.insertTimeInVid = 0; //final-ok
//--there is no this.endTime --since has this.endTime()
//--must
this.drawLayer = DrawLayer.MiddleGround;
//--must
this.id = Math.random().toString(36).slice(2);
this.style = new Style(); 

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
////////////////////////////////////////////////////////
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
p.drawRect(p.xPerc(this.p.x),p.yPerc(this.p.y),this.width(p),this.height(p),this.style);
return true;
}

protected xAfterAlignment(p :Pack):number{
let x = this.p.x; //does  not change the orignal X   
        if (this.p.useRelativeXY == true){
            x =   p.xPerc(this.p.x);  
        }    
switch (this.p.xAlignment) {
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
    let y = this.p.y;    
        if (this.p.useRelativeXY == true){
            y =   p.yPerc(this.p.y);  
        }    

switch (this.p.yAlignment) {
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
let r = this.insertTimeInVid + this.duration; //both r in sec
return inMilliSec ? (r * 1000) : r;
}
getStartTime(inMilliSec :boolean = true) :number{
return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;    
}
setStartTime(n :number):number{
this.insertTimeInVid = n;
return this.insertTimeInVid;
}
////////////////////////////////////////////////////////
}//component ends