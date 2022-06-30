import {Pack} from "../bilza.js";
import WidthHeight from "./71WidthHeight.js";

import X from "./xy/x.js";
import Y from "./xy/y.js";

export default class Loc extends WidthHeight {
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
return this.x.aligned(this.widthInPix());
}
yAligned():number{   
return this.y.aligned(this.heightInPix());
}

}//component ends 