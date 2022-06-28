import {Pack,IComponent} from "../bilza.js";
import Shadow from "./80Shadow.js";
import BaseComponentBase from "./99BaseComponentBase.js";
// import PreInitGoto from "./designBC/preInitGoto.js";
// import PreInitAnimate from "./designBC/preInitAnimate.js";
// import PreInitVibrate from "./designBC/preInitVibrate.js";
// import AniPreset from "./aniPreset.js";

import X from "./xy/x.js";
import Y from "./xy/y.js";

export default class Loc extends Shadow {
// XX-------------||||||||||||||||||||||---------------XX 
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
//--24-june 2022 removed loc for indl x and y using new AniNumber class
public x :X; 
public y :Y;
// aniPreset :AniPreset;

constructor (){
    super();
this.x = new X();
this.y = new Y();
this.charsWidth = null;  
// this.aniPreset = new AniPreset(this);
}

init(p: Pack): boolean {
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();
this.x.init(this.usePercentages,this.canvasWidth);//canvasWidth
this.y.init(this.usePercentages,this.canvasHeight);//canvasHeight
return true;
}

width(): number {
return 0;
}
//--width is actually /shd be dynWidth in pix
height(): number {   
return 0;
}

update(msDelta :number,p :Pack): boolean {
    this.x.update(msDelta);
    this.y.update(msDelta);
    // this.dynWidth.update(msDelta);
    // this.dynHeight.update(msDelta);
return true;    
}
draw(p: Pack): boolean {
    return true;
}

public random(startTimeSec :number,endTimeSec :number,Xmin :number=1, Xmax :number=100,Ymin :number=1, Ymax :number=100,skipXFrames :number=60){
this.x.random(startTimeSec,endTimeSec,Xmin,Xmax,skipXFrames);
this.y.random(startTimeSec,endTimeSec,Ymin,Ymax,skipXFrames);
}
public vibrate(from: number, to: number, x: number,y: number, offset: number, delay: number): void {
    this.x.vibrate(from,to,x,offset,delay);
    this.y.vibrate(from,to,y,offset,delay);
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
return this.x.aligned(this.width());
}
yAligned():number{   
return this.y.aligned(this.height());
}

}//component ends 