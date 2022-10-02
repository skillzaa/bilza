import IComponent from "../../facade/IComponent.js";
import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";


///////////////////////////////////////////////////
export default class ComponentDb extends CoreProps implements IComponent {
///////////////////////////////////////////////////

public readonly startTime :number;
public readonly endTime :number ;
public readonly insertAction :"add"|"append" | "alwaysOn";

private readonly canvasWidth :number;
private readonly canvasHeight :number;
////////////////////////////////////////
public alignObj :Alignment;
public alignRotateObj :Alignment;
///////////////////////////////////////////////////
constructor(startTime :number,endTime :number,canvasWidth :number,canvasHeight :number,insertAction :"add"|"append" | "alwaysOn"){
        
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
animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
this.x.animate(timeFrom,timeTo,xFrom,xTo);    
this.y.animate(timeFrom,timeTo,yFrom,yTo);    
return true;    
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
    return this.startTime;
}
getEndTime(inMilliSec ?:boolean) :number{
    return this.endTime;
}


goto(atFrame :number,x :number , y :number):boolean{
    return true;
}


////////////////////////////////////////////    
}