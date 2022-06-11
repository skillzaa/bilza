import { IComponent,BaseComponent,XAlignment,YAlignment,OffScreenYOpt,OffScreenXOpt } from "../Bilza.js";

export default class AniPresent {
private comp :IComponent;
constructor(comp :IComponent){
this.comp = comp;
}    
    
///////////////////////===top==//////////////////////////////
TinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=0,yUpto:number=90,xAlign :XAlignment = XAlignment.Mid,yAlign :YAlignment = YAlignment.Top){
this.comp.goto(fromSec,x,OffScreenYOpt.YTop,xAlign,yAlign);    
this.comp.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,yUpto,xAlign,xAlign,yAlign,yAlign);
}
//----------------------------------
TinBout(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50){
this.comp.goto(fromSec,x,OffScreenYOpt.YTop,XAlignment.Mid,YAlignment.Top);    
this.comp.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,OffScreenYOpt.YBot,XAlignment.Mid,XAlignment.Mid);
}
///////////////////////===Right==//////////////////////////////
RinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,xUpto :number,y:number=50){
this.comp.goto(0,this.comp.offScreenXOpt.XRight,y);
this.comp.animate(fromSec,toSec,OffScreenXOpt.XRight,xUpto,y,y,XAlignment.Right,XAlignment.Mid);
}
RinLout(comp :BaseComponent,fromSec :number=0,toSec:number=4,y:number=50){
this.comp.goto(0,this.comp.offScreenXOpt.XRight,y);
this.comp.animate(fromSec,toSec,OffScreenXOpt.XRight,OffScreenXOpt.XLeft,y,y,XAlignment.Right,XAlignment.Mid);
}

///////////////////////===left==//////////////////////////////
LinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,xUpto :number,y:number=50){
this.comp.goto(0,this.comp.offScreenXOpt.XLeft,y);
this.comp.animate(fromSec,toSec,this.comp.offScreenXOpt.XLeft,xUpto,y,y,XAlignment.Right,XAlignment.Mid);
}
LinRout(comp :BaseComponent,fromSec :number=0,toSec:number=4,y:number=50){
this.comp.goto(0,this.comp.offScreenXOpt.XLeft,y);
this.comp.animate(fromSec,toSec,this.comp.offScreenXOpt.XLeft,this.comp.offScreenXOpt.XRight,y,y,XAlignment.Right,XAlignment.Mid); 
}

///////////////////////===BOTTOM==//////////////////////////////
BinTout(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50){
this.comp.goto(0,x,this.comp.offScreenYOpt.YBot,XAlignment.Mid,YAlignment.Top);

this.comp.animate(fromSec,toSec,x,x,this.comp.offScreenYOpt.YBot,this.comp.offScreenYOpt.YTop,XAlignment.Mid,XAlignment.Mid,YAlignment.Top,YAlignment.Top); 
}
BinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50,yUpto :number = 50){
this.comp.goto(0,x,this.comp.offScreenYOpt.YBot,XAlignment.Mid,YAlignment.Top);
this.comp.animate(fromSec,toSec,x,x,this.comp.offScreenYOpt.YBot, yUpto,XAlignment.Mid,XAlignment.Mid,YAlignment.Top,YAlignment.Top); 
}
    
}