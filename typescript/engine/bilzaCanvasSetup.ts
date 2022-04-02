import {Pack} from "../Bilza.js";
import BilzaTimer from "./bilzaTimer.js";
 
export default class BilzaCanvasSetup extends BilzaTimer {
protected pack:Pack; //---later
protected canvasId :string;
public dynamicResizing : boolean;
//==================PUBLIC API
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (canvasId="bilza",canvasWidth=800,canvasHeight=350,timeEnd=Number.MAX_SAFE_INTEGER){
super(timeEnd);
this.canvasId = canvasId; 
this.dynamicResizing = true;
this.pack = new Pack(this.canvasId,canvasWidth,canvasHeight);
} 
//--This should be in Pack---////////////////
setCanvas(width :number = 800,height :number = 400){
this.pack = new Pack(this.canvasId,width,height);
if (this.dynamicResizing == true){
    this.resize(width,height);
}
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