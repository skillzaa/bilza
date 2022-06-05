import { IComponent,BaseComponent,XAlignment,YAlignment } from "./Bilza.js";



export default class AniPre {


constructor(){

}

static LinStop(comp :BaseComponent,fromSec :number=0,toSec:number=4,xUpto:number=100,y:number=0){
comp.loc.goto(fromSec,0,y,XAlignment.Right,YAlignment.Top)    
comp.loc.animate(fromSec,toSec,0,xUpto,y,y,XAlignment.Right,XAlignment.Right);
}
}