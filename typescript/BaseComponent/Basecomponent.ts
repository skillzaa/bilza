import {Pack,IComponent,DrawLayer} from "../Bilza.js";
import Style from "../design/style.js";
import {YAlignment} from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";

import MoveYItem from "./moveYItem.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { OffScreenYOpt } from "./OffScreenYOpt.js";

export default class BaseComponent  implements IComponent {
public props :BaseProps;
public  p:BaseProps;
public readonly id :string;
public drawLayer : DrawLayer; 
public style:Style;
public  duration :number;
//-----Alignment
public readonly offScreenXOpt :typeof OffScreenXOpt;
public readonly offScreenYOpt :typeof OffScreenYOpt;
public readonly yAlignmentOptions:typeof YAlignment;  
/////////////////----PRIVATE----///////////////////
 
private moveYArray :MoveYItem[];  
private  insertTimeInVid:number; 
public alwaysOn: boolean;
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//--KEEP COMP drfault duration at 10 sec
constructor (){
    
    this.alwaysOn = false;
    
    this.moveYArray = [];
    this.offScreenXOpt = OffScreenXOpt; //final-ok
    this.offScreenYOpt = OffScreenYOpt; //final-ok
    this.yAlignmentOptions = YAlignment; //final-ok
    this.duration = 0; //can not be changed again even not by children comps
    this.insertTimeInVid = 0; //final-ok
    //--there is no this.endTime --since has this.endTime()
    //--must
    this.drawLayer = DrawLayer.MiddleGround;
    //--must
    this.id = Math.random().toString(36).slice(2);
    this.style = new Style(); 
    
this.props = new BaseProps(this.width.bind(this),this.height.bind(this));;    
this.p = this.props;
}

width(p: Pack): number {
    return 100;
}
height(p: Pack): number {
    return 100;
}
// brilent do not send frame in draw args just send frame in update-
init(p: Pack): boolean {
    this.initProps(p);//--Always
    // this.initMoveYArray(p);      
    return true;
}
initProps(p :Pack){
    // this.p.x.setValue(Math.ceil(p.xPerc(this.p.x.value())));
    this.p.x.init(p,this.getStartTime(),this.getEndTime(),this.duration);
    // this.p.y.setValue(Math.ceil(p.yPerc(this.p.y.value())));
    this.p.y = 0;
}

draw(p: Pack): boolean {
    return true;
}
update(msDelta :number,p :Pack): boolean {
    this.p.x.update(msDelta,p);
    // this.p.y.update(msDelta,p);
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

moveX (from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
this.props.x.moveX(from,to,startValue,endValue);
}
// moveY (from :number=0,to :number=10,startValue :number | OffScreenYOpt =0,endValue :number | OffScreenYOpt =100){
//     const item = new MoveYItem(from,to,startValue,endValue);
// this.moveYArray.push(item);        
// }
// move (from :number=0,to :number=10,startX :number=0,endX :number=100,startY :number=0,endY :number=100){

// }

////////////////////////////////////////////////////////
}//component ends 