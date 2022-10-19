import CompFactory from "../facade/coreCompsFactory.js";
import LineShapeFactory from "../facade/lineShapesFactory.js";
import Linker from "../facade/linker.js";
///////////////////////////////////////////////////////
export default class Scene {
//...........................................
public readonly startTime :number;    
public readonly endTime :number;  
private linker :Linker;  
//...........................................
constructor(linker :Linker){
this.linker = linker;   
this.linker.setInsertAction("add");
//--read and save the orignal start and end time
this.startTime = linker.startTime();    
this.endTime = linker.endTime();    
}

public add(startTimePlus :number = 0,endTimeMinus :number = 0):CompFactory{
//---check
const itemStartTime  = this.startTimePlus (startTimePlus);
const itemEndTime    = this.endTimeMinus  (endTimeMinus); 
if (itemStartTime >= itemEndTime ){
    throw new Error("item StartTime is larger than or equal to item EndTime");
}
//------------------------------------------------------    
this.linker.setStartTime(itemStartTime);
this.linker.setEndTime(itemEndTime);
const cf = new CompFactory(this.linker);
return cf;
}
public addLineShape(startTimePlus :number = 0,endTimeMinus :number = 0):LineShapeFactory{
//---check
const itemStartTime  = this.startTimePlus (startTimePlus);
const itemEndTime    = this.endTimeMinus  (endTimeMinus); 
if (itemStartTime >= itemEndTime ){
    throw new Error("item StartTime is larger than or equal to item EndTime");
}
//------------------------------------------------------    
this.linker.setStartTime(itemStartTime);
this.linker.setEndTime(itemEndTime);
const cf = new LineShapeFactory(this.linker);
return cf;
}
//...........................................
protected startTimePlus(sec :number):number{
return this.startTime + sec;
}
//...........................................
protected endTimeMinus(sec :number):number{
return this.endTime - sec;
}

//-----------------------------------    
}