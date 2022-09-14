
import { IComponent,CompFactory} from "../bilza.js";
import IScene from "./IScene.js";
import SceneComp from "./SceneComp.js";
export default class Scene implements IScene{
//--START TIME IS ALWAYS = 0 

private readonly _duration :number;    
//--start time can be zero but when we create a scene and we know it we can eaily use this point for inserting sceneComps.
private readonly _startTime :number;    
private readonly _endTime :number;    
// private sceneComps :SceneComp[];
private comps :IComponent[];

constructor(startTime :number,endTime :number){
   this.comps = [];
   // this.sceneComps = [];
   this._startTime = startTime;   
   this._endTime = endTime;   
this._duration = this._endTime  - this._startTime;
if (this._duration < 1) { throw new Error("start time can not be smaller than end time");
}
if (this._duration <= 2) { console.error("Scene duration is set too small may cause problems while inserting components");}

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


// public add(comp :IComponent,startTimePlusInSec :number=0, endTimeMinusInSec :number=0){

// this.minDurationViolation(comp,startTimePlusInSec, endTimeMinusInSec);
// //--------------------------------
// const startTimeSec = this.startTimePlus(startTimePlusInSec);
// const endTimeSec = this.endTimeMinus(endTimeMinusInSec);

// //--here we set its duration which also sets its startTime (scene start time is always = 0 so comp start point is from that prespective), and endTimeSec  
// //--BUT when we insert it inside bil.insert.add we have to reset its start and end time keeping the same duration
// comp.setTimings(startTimeSec,endTimeSec);     
// this.sceneComps.push(comp);
// }
add(startTime :number,endTime :number):CompFactory{
const cf = new CompFactory(startTime,endTime,"add",this.insert.bind(this));
return cf;
}

private setCompTimings(comp :IComponent,startTimePlusInSec :number=0, endTimeMinusInSec :number=0){

this.minDurationViolation(comp,startTimePlusInSec, endTimeMinusInSec);
//--------------------------------
const startTimeSec = this.startTimePlus(startTimePlusInSec);
const endTimeSec = this.endTimeMinus(endTimeMinusInSec);

//--here we set its duration which also sets its startTime (scene start time is always = 0 so comp start point is from that prespective), and endTimeSec  
//--BUT when we insert it inside bil.insert.add we have to reset its start and end time keeping the same duration
comp.setTimings(startTimeSec,endTimeSec);     
this.comps.push(comp);
}
public insert(comp :IComponent, actionType :string):IComponent{
// const sc = new SceneComp(comp,actionType);   
//upto this point the timings are for scene and now will translate for 
this.setCompTimings(comp,comp.getStartTime(false),comp.getEndTime(false))
this.comps.push(comp)
return comp;  
}

private startTimePlus(timeSec :number=0):number{
const startTimeSec = this._startTime + timeSec;
if (startTimeSec > (this.getEndTime() - 1)  
){
   throw new Error( `components start and end time should be with in the start and end time of the scene (which in this case is ${this.getStartTime()} and ${this.getEndTime()}`);
}
return startTimeSec;
}

private endTimeMinus(timeSec :number=0):number{
const endTimeSec =  this._endTime - timeSec;

if (endTimeSec <= 0){ throw new Error("Negative end time");}
//-- i think this is covered
// if (endTimeSec <= 0){ throw new Error("Negative end time");}

if (endTimeSec > (this.getEndTime())  
){
   throw new Error( `components start and end time should be with in the start and end time of the scene (which in this case is ${this.getStartTime()} and ${this.getEndTime()}`);
}
//---------------------------
if (endTimeSec <= this._startTime ){
   throw new Error("scene minimum width violation");
}
return endTimeSec;
}

private minDurationViolation(comp :IComponent,startTimePlusInSec :number, endTimeMinusInSec :number){
const minReq = endTimeMinusInSec + startTimePlusInSec  ;
//--plus 1 since entry and exit animations to lag sakay
if (minReq >= (this._duration)){ // - 1
   throw new Error(`Scene minimum duration violated by component id:${comp.id}. The scene minimum duration may be more than you have given it`);
}

}
/////////////////////////////////////
}

