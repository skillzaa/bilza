import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
import StartTimeObj from "./startTimeObj.js";
import EndTimeObj from "./endTimeObj.js";
///////////////////////////////////////////////////


export default class BaseCompDb extends CoreProps {
///////////////////////////////////////////////////

public readonly startTime :number | StartTimeObj;
public readonly endTime :number | EndTimeObj;
private readonly canvasWidth :number;
private readonly canvasHeight :number;
public align :Alignment;
public alignRotate :Alignment;
///////////////////////////////////////////////////
constructor(startTime :number | StartTimeObj,
    endTime :number | EndTimeObj,
    canvasWidth :number,canvasHeight :number){
        
super();
this.startTime = startTime;
this.endTime = endTime;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;

this.align = new Alignment(0,0);
this.alignRotate = new Alignment(0,0);
}

    
}