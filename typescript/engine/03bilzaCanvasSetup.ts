import {Pack,IComponent} from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
 
export default class BilzaCanvasSetup extends BilzaTimer {
protected pack:Pack; //---later
protected canvasId :string;

//==================PUBLIC API
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId:string,canvasWidth:number,canvasHeight:number|null=null,timeEndSec:number){

    super(timeEndSec);
this.canvasId = canvasId;
if (canvasHeight ==null){
    canvasHeight = this.util.aspectRatioHeight(canvasWidth);
} 
this.pack = new Pack(this.canvasId,canvasWidth,canvasHeight);
} 
insert(comp:IComponent):IComponent{
    // comp.init(this.pack);
    this.comps.push(comp);
    return comp;
}
//--This should be in Pack---////////////////
setCanvas(width :number = 800,height :number|null = null){
    if (height ==null){
        height = this.util.aspectRatioHeight(width);
    }

this.pack = new Pack(this.canvasId,width,height);
    this.resize(width,height);
}
//
getCanvasHeight():number{
return this.pack.canvasHeight();    
}

getCanvasWidth():number{
return this.pack.canvasWidth();    
}

///////////////////////////////////////////////////
}//ends