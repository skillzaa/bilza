import {Pack,IComponent,XAlignment,YAlignment} from "../bilza.js";
// import Style from "../design/style.js";
import BaseComponentBase from "./BaseComponentBase.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
import AniPresent from "./aniPresent.js";

export default class BaseComponent extends BaseComponentBase implements IComponent {
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
aniPreset :AniPresent;
//--KEEP COMP drfault duration at 10 sec
constructor (){
    super();
    this.charsWidth = null;  
    this.aniPreset = new AniPresent(this);
}

init(p: Pack): boolean {
//--- now i have width in pix when app is init and width in percentage when not init...    
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();  
this.loc.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;
}

width(): number {
return 0;
} 
height(): number {   
return 0;
}

update(msDelta :number,p :Pack): boolean {
    this.loc.update(msDelta);
//--dont use them here use them in comps    
    // this.dynWidth.update(msDelta);
    // this.dynHeight.update(msDelta);
return true;    
}

draw(p: Pack): boolean {
    return true;
}
////////////////////////////////////////////////////////
// checkCollision(x: number, y: number, p: Pack): boolean {
//     return false;
// }
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
goto(atFrame :number,x :number|OffScreenXOpt , y :number|OffScreenYOpt,xAlign :XAlignment=XAlignment.Left,yAlign :YAlignment=YAlignment.Top,xExtra :number=0,yExtra :number=0):boolean{
return this.loc.goto(atFrame,x, y,xAlign,yAlign,xExtra,yExtra);

}
animate(timeFrom :number,timeTo :number,
    xFrom :number |OffScreenXOpt,xTo :number |OffScreenXOpt, yFrom :number|OffScreenYOpt,yTo :number |OffScreenYOpt,
     
    xAlignFrom :XAlignment=XAlignment.Left,xAlignTo :XAlignment=XAlignment.Left,yAlignFrom :YAlignment=YAlignment.Top,yAlignTo :YAlignment=YAlignment.Top,
    
    xExtraFrom :number=0,xExtraTo :number=0,yExtraFrom :number=0,yExtraTo :number=0):boolean {
return this.loc.animate(timeFrom,timeTo,
    xFrom,xTo, yFrom ,yTo,
    xAlignFrom,xAlignTo,yAlignFrom,yAlignTo,
    xExtraFrom,xExtraTo,yExtraFrom,yExtraTo);
}
x():number{   
return this.loc.x();
}
y():number{   
 return this.loc.y(); 
}
////////////////////////////////////////////////////////
}//component ends 