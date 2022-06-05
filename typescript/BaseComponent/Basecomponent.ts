import {Pack,IComponent} from "../Bilza.js";
// import Style from "../design/style.js";
import BaseComponentBase from "./BaseComponentBase.js";
// import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
// import { OffScreenYOpt } from "../design/OffScreenYOpt.js";

export default class BaseComponent extends BaseComponentBase implements IComponent {

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//--KEEP COMP drfault duration at 10 sec
constructor (){
    super();  
}

width(): number {
   return 10;
}
height(): number {
    return 10;
}
// brilent do not send frame in draw args just send frame in update-
init(p: Pack): boolean {
//--- now i have width in pix when app is init and width in percentage when not init    
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();  

this.loc.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());


return true;
}


update(msDelta :number,p :Pack): boolean {
    this.loc.update(msDelta);
    // this.dynWidth.update(msDelta);
    // this.dynHeight.update(msDelta);
return true;    
}

draw(p: Pack): boolean {
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

////////////////////////////////////////////////////////
}//component ends 