import {Pack} from "../index.js";
import BilzaTimer from "./bilzaTimer.js";
 
export default class BilzaCanvasSetup extends BilzaTimer {
protected pack:Pack; //---later
protected canvasId :string;
//==================PUBLIC API
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilzaa2d",canvasWidth=800,canvasHeight=350,timeEnd=Number.MAX_SAFE_INTEGER){
super(timeEnd);
this.canvasId = canvasId; 
this.pack = new Pack(canvasWidth,canvasHeight,this.canvasId);
} 
//--This should be in Pack---////////////////
setCanvas(width :number = 800,height :number = 400){
this.pack = new Pack(width,height,this.canvasId);
}
//
getCanvasHeight(){
return this.pack.canvasHeight;    
}

getCanvasWidth(){
return this.pack.canvasWidth;    
}

///////////////////////////////////////////////////
}//ends