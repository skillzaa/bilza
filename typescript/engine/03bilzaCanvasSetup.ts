import {Pack} from "../Bilza.js";
import BilzaTimer from "./02bilzaTimer.js";
 
export default class BilzaCanvasSetup extends BilzaTimer {
protected pack:Pack; //---later
protected canvasId :string;

//==================PUBLIC API
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId:string,canvasWidth:number,canvasHeight:number,timeEnd:number){
super(timeEnd);
this.canvasId = canvasId; 
this.pack = new Pack(this.canvasId,canvasWidth,canvasHeight);
} 

//--This should be in Pack---////////////////
setCanvas(width :number = 800,height :number = 400){
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