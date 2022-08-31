
import { IComponent,CompFactory as cf } from "../bilza.js";
import IScene from "./IScene.js";

export default class Scene implements IScene{
//--START TIME IS ALWAYS = 0 

private readonly _duration :number;    
//--start time can be zero but when we create a scene and we know it we can eaily use this point for inserting comps.
private readonly _startTime :number;    
private readonly _endTime :number;    
private comps :IComponent[];

constructor(startTime :number,endTime :number){
   this.comps = [];
   this._startTime = startTime;   
   this._endTime = endTime;   
this._duration = this._endTime  - this._startTime;
if (this._duration < 1) { throw new Error("start time can not be smaller than end time");
}

}
//////////////////////////////////////
public getComps():IComponent[]{
return this.comps;
}

public getStartTime():number{
return this._startTime; 
}        
public getEndTime():number{
return this._endTime; 
}        
public duration():number{
return this._duration;
}        


public add(comp :IComponent,startTimeSec :number, endTimeSec :number){
 if (startTimeSec < this.getStartTime() ||
 endTimeSec > this.getEndTime()
 ){
    throw new Error( `components start and end time should be with in 0 and scene duration (which in this case is ${this._duration}`);
 }
//--here we set its duration which also sets its startTime (scene start time is always = 0 so comp start point is from that prespective), and endTimeSec  
//--BUT when we insert it inside bil.insert.add we have to reset its start and end time keeping the same duration
comp.setTimings(startTimeSec,endTimeSec);     
this.comps.push(comp);
}

startTimePlus(timeSec :number=0):number{
return this._startTime + timeSec;
}
endTimeMinus(timeSec :number=0):number{
return Math.abs(this._endTime - timeSec) ;
}
/////////////////////////////////////
}

