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

width(): number {
    if (this.p.widthPix !== null ){
        return this.p.widthPix ;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}
height(): number {
    if (this.p.heightPix !== null){
        return this.p.heightPix ;
    }else {
        throw new Error("the component is not initialized yet");        
    }
}

// brilent do not send frame in draw args just send frame in update-
init(p: Pack): boolean {
//--- now i have width in pix when app is init and width in percentage when not init    
this.p.widthPix =   Math.ceil((p.canvasWidth()/100)*this.p.widthDyn);  
this.p.heightPix =   Math.ceil((p.canvasHeight()/100)*this.p.heightDyn);      
    this.initProps(p);//--Always
    // this.initMoveYArray(p);      
    return true;
}
initProps(p :Pack){
this.p.x.init(this.width( ),this.height( ),p.canvasWidth(),p.canvasHeight());
this.p.y.init(this.width( ),this.height( ),p.canvasWidth(),p.canvasHeight());
}

draw(p: Pack): boolean {
    return true;
}
update(msDelta :number,p :Pack): boolean {
    this.p.x.update(msDelta);
    this.p.y.update(msDelta);
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

// moveX (from :number=0,to :number=10,startValue :number | OffScreenXOpt =0,endValue :number | OffScreenXOpt =100){
// this.props.x.animate(from,to,startValue,endValue);
// }
// moveY (from :number=0,to :number=10,startValue :number | OffScreenYOpt =0,endValue :number | OffScreenYOpt =100){
//     const item = new MoveYItem(from,to,startValue,endValue);
// this.moveYArray.push(item);        
// }
// move (from :number=0,to :number=10,startX :number=0,endX :number=100,startY :number=0,endY :number=100){

// }

////////////////////////////////////////////////////////
}//component ends 