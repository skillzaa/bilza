import Bilza from "../bilza.js";
import CompFactory from "../facade/coreCompsFactory.js";
import LineShapeFactory from "../compFactory/lineShapesFactory.js";

///////////////////////////////////////////////////////
export default class ScreenPack{
//...........................................
public readonly startTime :number;    
public readonly endTime :number;    
private bilzaObj :Bilza;
//...........................................
constructor(startTime :number , endTime :number,bilzaObj :Bilza){
this.startTime = startTime;    
this.endTime = endTime;    
this.bilzaObj = bilzaObj; 
}

public add(startTimePlus :number = 0,endTimeMinus :number = 0):CompFactory{
//---check
const itemStartTime  = this.startTimePlus (startTimePlus);
const itemEndTime    = this.endTimeMinus  (endTimeMinus); 
if (itemStartTime >= itemEndTime ){
    throw new Error("item StartTime is larger than or equal to item EndTime");
}
//------------------------------------------------------    
const cf = this.bilzaObj.add( itemStartTime,itemEndTime);
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
const ls = this.bilzaObj.lineShapes.add(this.startTime,this.endTime);    
return ls;
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