import IComponent from "../IComponent.js";
import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
import StartTimeObj from "./startTimeObj.js";
import EndTimeObj from "./endTimeObj.js";
///////////////////////////////////////////////////


export default class CompDb extends CoreProps implements IComponent {
///////////////////////////////////////////////////

public readonly startTime :number | StartTimeObj;
public readonly endTime :number | EndTimeObj;
public readonly insertAction :"add"|"append";
private readonly canvasWidth :number;
private readonly canvasHeight :number;
////////////////////////////////////////
public alignObj :Alignment;
public alignRotateObj :Alignment;
///////////////////////////////////////////////////
constructor(startTime :number,endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append"){
        
super();
this.startTime = startTime;
this.endTime = endTime;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;
this.canvasHeight = canvasHeight;
this.insertAction = insertAction;

this.alignObj = new Alignment(0,0);
this.alignRotateObj = new Alignment(0,0);
}
align(x:number,y:number):void{

}
alignRotate(x:number,y:number):void{

}

compWidth():number{
    return 3;
}
compWidthPix():number{
    return 3;
}

compHeight():number{
    return 3;
}
compHeightPix():number{
    return 3;
}

contentWidth():number{
    return 3;
}
contentWidthPix():number{
    return 3;
}

contentHeight():number{
    return 3;
}
contentHeightPix():number{
    return 3;
}
////////////////////////////////////////////
getDuration():number{
    return 3;
}
getStartTime(inMilliSec ?:boolean) :number{
    return 3;
}
getEndTime(inMilliSec ?:boolean) :number{
    return 3;
}


goto(atFrame :number,x :number , y :number):boolean{
    return true;
}

animate(secFrom :number,secTo :number,xFrom :number,xTo :number, 
    yFrom :number,yTo :number,):boolean{
        return true;
}  
setDrawLayer(drawLayerNumber :0|1|2|3|4):0|1|2|3|4{
    return 2;
}      
////////////////////////////////////////////    
}