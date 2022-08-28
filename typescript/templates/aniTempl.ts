// import {BaseComponent,XAlignment,YAlignment,OffScreenYOpt,OffScreenXOpt } from "../bilza.js";

// export default class AniTempl {

    
// ///////////////////////===top==//////////////////////////////
// static TinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=0,yUpto:number=90,xAlign :XAlignment = XAlignment.Mid,yAlign :YAlignment = YAlignment.Top){
// comp.goto(fromSec,x,OffScreenYOpt.YTop,xAlign,yAlign);    
// comp.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,yUpto,xAlign,xAlign,yAlign,yAlign);
// }
// //----------------------------------
// static TinBout(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50){
// comp.goto(fromSec,x,OffScreenYOpt.YTop,XAlignment.Mid,YAlignment.Top);    
// comp.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,OffScreenYOpt.YBot,XAlignment.Mid,XAlignment.Mid);
// }
// ///////////////////////===Right==//////////////////////////////
// static RinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,xUpto :number,y:number=50){
// comp.goto(0,comp.offScreenXOpt.XRight,y);
// comp.animate(fromSec,toSec,OffScreenXOpt.XRight,xUpto,y,y,XAlignment.Right,XAlignment.Mid);
// }
// static RinLout(comp :BaseComponent,fromSec :number=0,toSec:number=4,y:number=50){
// comp.goto(0,comp.offScreenXOpt.XRight,y);
// comp.animate(fromSec,toSec,OffScreenXOpt.XRight,OffScreenXOpt.XLeft,y,y,XAlignment.Right,XAlignment.Mid);
// }

// ///////////////////////===left==//////////////////////////////
// static LinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,xUpto :number,y:number=50){
// comp.goto(0,comp.offScreenXOpt.XLeft,y);
// comp.animate(fromSec,toSec,comp.offScreenXOpt.XLeft,xUpto,y,y,XAlignment.Right,XAlignment.Mid);
// }
// static LinRout(comp :BaseComponent,fromSec :number=0,toSec:number=4,y:number=50){
// comp.goto(0,comp.offScreenXOpt.XLeft,y);
// comp.animate(fromSec,toSec,comp.offScreenXOpt.XLeft,comp.offScreenXOpt.XRight,y,y,XAlignment.Right,XAlignment.Mid); 
// }

// ///////////////////////===BOTTOM==//////////////////////////////
// static BinTout(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50){
// comp.goto(0,x,comp.offScreenYOpt.YBot,XAlignment.Mid,YAlignment.Top);

// comp.animate(fromSec,toSec,x,x,comp.offScreenYOpt.YBot,comp.offScreenYOpt.YTop,XAlignment.Mid,XAlignment.Mid,YAlignment.Top,YAlignment.Top); 
// }
// static BinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50,yUpto :number = 50){
// comp.goto(0,x,comp.offScreenYOpt.YBot,XAlignment.Mid,YAlignment.Top);
// comp.animate(fromSec,toSec,x,x,comp.offScreenYOpt.YBot, yUpto,XAlignment.Mid,XAlignment.Mid,YAlignment.Top,YAlignment.Top); 
// }
    
// }