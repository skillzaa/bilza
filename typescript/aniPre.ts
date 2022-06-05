import { IComponent,BaseComponent,XAlignment,YAlignment,OffScreenYOpt,OffScreenXOpt } from "./Bilza.js";



export default class AniPre {


constructor(){

}

static LinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,xUpto:number=100,y:number=0){
comp.loc.goto(fromSec,0,y,XAlignment.Right,YAlignment.Top)    
comp.loc.animate(fromSec,toSec,0,xUpto,y,y,XAlignment.Right,XAlignment.Right);
}
static TinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=0,yUpto:number=90){
comp.loc.goto(fromSec,x,OffScreenYOpt.YTop,XAlignment.Mid,YAlignment.Top);    
comp.loc.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,yUpto,XAlignment.Mid,XAlignment.Mid);
}
static LinRout(comp :BaseComponent,fromSec :number=0,toSec:number=4,y:number=0){
comp.loc.goto(fromSec,0,y,XAlignment.Right,YAlignment.Top);    
comp.loc.animate(fromSec,toSec,0,100,y,y,XAlignment.Right,XAlignment.Left);
}
////////////////////////////////////////////////////////////
static TinBout(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50){
comp.loc.goto(fromSec,x,OffScreenYOpt.YTop,XAlignment.Mid,YAlignment.Top);    
comp.loc.animate(fromSec,toSec,x,x,OffScreenYOpt.YTop,OffScreenYOpt.YBot,XAlignment.Mid,XAlignment.Mid);
}
// static BinTout(comp :BaseComponent,fromSec :number=0,toSec:number=4,x:number=50){
// comp.loc.goto(fromSec,x,OffScreenYOpt.YBot,XAlignment.Mid,YAlignment.Top);    
// comp.loc.animate(fromSec,toSec,x,x,OffScreenYOpt.YBot,OffScreenYOpt.YTop,XAlignment.Mid,XAlignment.Mid);
// }
}