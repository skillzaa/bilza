import {Pack,IComponent,DrawLayer} from "../Bilza.js";
import Style from "../design/style.js";
import {XAlignment} from "../design/xAlignment.js";
import {YAlignment} from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
// import {InsertTypeOptions} from "./insertTypeOptions.js";
//--This is an Abstract class
export default class Component  implements IComponent {
public props :BaseProps;
public  p:BaseProps;
public readonly id :string;
public drawLayer : DrawLayer; 
public style:Style;
//-----Alignment
public readonly xAlignmentOptions:typeof XAlignment;   
public readonly yAlignmentOptions:typeof YAlignment;  
/////////////////----PRIVATE----///////////////////
//---??????????????????
public  duration :number;  
//--this was previously _startTime but actually insertTimeInVid now, this show the point at which this comp will be inserted into the overall video. Inside a container Component this insert time is implemented by comtainer component. 
private  insertTimeInVid:number; 
public alwaysOn: boolean;
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//--KEEP COMP drfault duration at 10 sec
constructor (){
this.props = new BaseProps();    
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
// drawBoundingRectangle(p :Pack) :boolean{
// this.style.strokeStyle = "black";    
// p.drawRect(p.xPerc(this.p.x.value()),p.yPerc(this.p.y),this.width(p),this.height(p),this.style);
// return true;
// }

// protected xAfterAlignment(p :Pack):number{
// let x = this.p.x.value(); //does  not change the orignal X   
//         if (this.p.useRelativeXY == true){
//             x =   p.xPerc(this.p.x.value());  
//         }    
// switch (this.p.xAlignment) {
//     case this.xAlignmentOptions.Left:
        
//         break;
//     case this.xAlignmentOptions.Mid:
//          x = Math.floor(x - ((this.width(p)/2)));
//         break;
    
//     case this.xAlignmentOptions.Right:
//         Math.floor(x - (this.width(p)));
//         break;
// }
// return x ;
// }
// protected yAfterAlignment(p :Pack):number{
//     let y = this.p.y;    
//         if (this.p.useRelativeXY == true){
//             y =   p.yPerc(this.p.y);  
//         }    

// switch (this.p.yAlignment) {
//     case this.yAlignmentOptions.Top:
//         break;
//     case this.yAlignmentOptions.Mid:
//          y = Math.floor(y - ((this.height(p)/2)));
//         break;
    
//     case this.yAlignmentOptions.Bot:
//         y = Math.floor(y - (this.height(p)));
//         break;
// }
// return y ;
// }
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

moveX (from :number=0,to :number=10,startValue :number=0,endValue :number=100){
    const newFrom = this.getStartTime(false) + from;
    const newTo = this.getStartTime(false) + to;
    this.p.x.increment(
        newFrom,
        newTo,
        startValue,
        endValue);    
}

////////////////////////////////////////////////////////
}//component ends 