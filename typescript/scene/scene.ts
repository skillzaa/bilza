
import { IComponent,CompFactory as cf } from "../bilza.js";
import IScene from "./IScene.js";

export default class Scene implements IScene{
//--START TIME IS ALWAYS = 0 

private readonly _duration :number;    
private comps :IComponent[];

constructor(durationSec :number){
this._duration = durationSec;
this.comps = [];

}
//////////////////////////////////////
public getComps():IComponent[]{
this.init();    
return this.comps;
}
//---it is always zero
// public getStartTime():number{
// return this.startTime; // THis should always be zero!!!!!
// }        
public duration():number{
return this._duration;
}        
//////////////////////////////////////////
protected init(){

}
public push(comp :IComponent,startTimeSec :number, endTimeSec :number){
 if (startTimeSec > this._duration ||
 endTimeSec > this._duration
 ){
    throw new Error( `components start and end time should be with in 0 and scene duration (which in this case is ${this._duration} )`);
 }
//--here we set its duration which also sets its startTime (scene start time is always = 0 so comp start point is from that prespective), and endTimeSec  
//--BUT when we insert it inside bil.insert.add we have to reset its start and end time keeping the same duration
comp.setDuration(startTimeSec,endTimeSec);     
this.comps.push(comp);
}
/////////////////////////////////////
}

