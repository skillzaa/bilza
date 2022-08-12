import {Pack} from "../bilza.js";
import WidthHeight from "./71WidthHeight.js";

export default class Loc extends WidthHeight {
// XX-------------||||||||||||||||||||||---------------XX 
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
//--24-june 2022 removed loc for indl x and y using new AniNumber class


// aniPreset :AniPreset;

constructor (){
    super();
this.charsWidth = null;  
// this.aniPreset = new AniPreset(this);

}

draw(p: Pack): boolean {
    return true;
}

public random(startTimeSec :number,endTimeSec :number,Xmin :number=1, Xmax :number=100,Ymin :number=1, Ymax :number=100,delay :number=60){
this.x.random(startTimeSec,endTimeSec,Xmin,Xmax,delay);
this.y.random(startTimeSec,endTimeSec,Ymin,Ymax,delay);
}
public vibrate(from: number, to: number, x: number,y: number, offset: number, delay: number): void {
    this.x.vibrate(from,to,offset,delay);
    this.y.vibrate(from,to,offset,delay);
}
goto(atFrame: number, x: number, y: number): boolean {
this.x.goto(atFrame,x);
this.y.goto(atFrame,y);
return true;    
}
animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
this.x.animate(timeFrom,timeTo,xFrom,xTo);    
this.y.animate(timeFrom,timeTo,yFrom,yTo);    
return true;    
}
xAligned():number{   
let x = this.x.value();     
switch (this.xAlign) {
    
    case this.XAlignOpt.Left :
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x - (this.compWidth()/2);    
    break;
    case this.XAlignOpt.Right:
    x = x - this.compWidth();    
    break;
}
return x;    
}
yAligned():number{   
let y = this.y.value();     
switch (this.yAlign) {   
    case this.YAlignOpt.Top :
    //--nothing        
    break;
    case this.YAlignOpt.Mid:
    y = y - (this.compHeight()/2);    
    break;
    case this.YAlignOpt.Bot:
    y = y - this.compHeight();    
    break;
}
return y;    
}
xRotateAligned():number{   
let x = this.xAligned();     
switch (this.xRotate) {
    
    case this.XAlignOpt.Left :
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x + (this.compWidth()/2);    
    break;
    case this.XAlignOpt.Right:
    x = x + this.compWidth();    
    break;
}
return x;    
}
yRotateAligned():number{   
let y = this.yAligned();     
switch (this.yRotate) {   
    case this.YAlignOpt.Top :
    //--nothing        
    break;
    case this.YAlignOpt.Mid:
    y = y + (this.compHeight()/2);    
    break;
    case this.YAlignOpt.Bot:
    y = y + this.compHeight();    
    break;
}
return y;    
}


}//component ends 