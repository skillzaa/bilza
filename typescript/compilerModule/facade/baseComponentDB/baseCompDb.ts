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
public alignment :Alignment;
///////////////////////////////////////////////////
constructor(startTime :number | StartTimeObj,
    endTime :number | EndTimeObj,
    canvasWidth :number,canvasHeight :number){
        
super();
this.startTime = startTime;
this.endTime = endTime;
this.canvasWidth = canvasWidth;
this.canvasHeight = canvasHeight;

this.alignment = new Alignment(0,0);
}

    
}