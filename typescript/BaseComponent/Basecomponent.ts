import {Pack,IComponent,DrawLayer} from "../Bilza.js";
import Style from "../design/style.js";
import {XAlignment} from "../design/xAlignment.js";
import {YAlignment} from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
import MoveXItem from "./moveXItem.js";
//--This is an Abstract class
export default class Component  implements IComponent {
public props :BaseProps;
public  p:BaseProps;
public useRelativeXY :boolean;
public readonly id :string;
public drawLayer : DrawLayer; 
public style:Style;
public  duration :number;
//-----Alignment
public readonly xAlignmentOptions:typeof XAlignment;   
public readonly yAlignmentOptions:typeof YAlignment;  
/////////////////----PRIVATE----///////////////////
private moveXArray :MoveXItem[];  
private moveYArray :MoveXItem[];  
//--this was previously _startTime but actually insertTimeInVid now, this show the point at which this comp will be inserted into the overall video. Inside a container Component this insert time is implemented by comtainer component. 
private  insertTimeInVid:number; 
public alwaysOn: boolean;
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//--KEEP COMP drfault duration at 10 sec
constructor (){
this.props = new BaseProps();    
this.p = this.props;
this.alwaysOn = false;
this.useRelativeXY = true;
this.moveXArray = [];
this.moveYArray = [];
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
    this.initProps(p);//--Always
if (this.useRelativeXY == true){
    this.initMoveXArray(p);
    this.initMoveYArray(p);    
} else {
    this.initMoveXArrayNONuseRelativeXY(p);
    this.initMoveYArrayNONuseRelativeXY(p);
}   
    return true;
}
initProps(p :Pack){
    // console.log("p.xPerc(this.p.x.value()",p.xPerc(this.p.x.value()));
    // this.p.x.setValue(Math.ceil(p.xPerc(this.p.x.value())));
    this.p.x.setValue(-150);
    this.p.y.setValue(Math.ceil(p.yPerc(this.p.y.value())));
}
private initMoveXArrayNONuseRelativeXY(p :Pack){
    for (let i = 0; i < this.moveXArray.length; i++) {
        const elm = this.moveXArray[i];
            this.p.x.increment(
            elm.from,
            elm.to,
            elm.startValue,
            elm.endValue);    
    }
}
private initMoveYArrayNONuseRelativeXY(p :Pack){
    
    for (let i = 0; i < this.moveYArray.length; i++) {
        const elm = this.moveYArray[i];
            this.p.x.increment(
            elm.from,
            elm.to,
            elm.startValue,
            elm.endValue);    
    }
}
private initMoveXArray(p :Pack){
    for (let i = 0; i < this.moveXArray.length; i++) {
        const elm = this.moveXArray[i];
        if (elm.startValue < elm.endValue){
                this.p.x.increment(
                this.getStartTime(false) + elm.from,
                this.getStartTime(false) + elm.to,
                Math.ceil(p.xPerc(elm.startValue)-150),//xxx
                Math.ceil(p.xPerc(elm.endValue))   );
        }else {
            this.p.x.decrement(
                this.getStartTime(false) + elm.from,
                this.getStartTime(false) + elm.to,
                Math.ceil(p.xPerc(elm.startValue)-150),//xxx
                Math.ceil(p.xPerc(elm.endValue))   );
        }
                
    }
}
private initMoveYArray(p :Pack){
    for (let i = 0; i < this.moveYArray.length; i++) {
        const elm = this.moveYArray[i];
            this.p.y.increment(
            this.getStartTime(false) + elm.from,
            this.getStartTime(false) + elm.to,
            Math.ceil(p.yPerc(elm.startValue)),
            Math.ceil(p.yPerc(elm.endValue))   );
    }
}
draw(p: Pack): boolean {
    return true;
}
update(msDelta :number, p: Pack): boolean {
    this.p.x.update(msDelta,p);
    this.p.y.update(msDelta,p);
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
    const item = new MoveXItem(from,to,startValue,endValue);
this.moveXArray.push(item);        
}
move (from :number=0,to :number=10,startX :number=0,endX :number=100,startY :number=0,endY :number=100){
    const itemX = new MoveXItem(from,to,startX,endX);
    const itemY = new MoveXItem(from,to,startY,endY);
this.moveXArray.push(itemX);        
this.moveYArray.push(itemY);        
}

////////////////////////////////////////////////////////
}//component ends 