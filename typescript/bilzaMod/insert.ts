import {DrawLayer,IComponent,Pack} from "../Bilza.js";
import Comps from "./comps.js";

export default class Insert {
private _pvt_duration_val :number; //the size of video-length in milli seconds     
private comps;
constructor(comps :Comps){
this.comps = comps;    
//14-may-2022-duration in seconds-dafault=0;    
this._pvt_duration_val = 0; 
}
////////////////////////////////////////////////////
//14-may-2022-Return the length of the video
private len(inMilliSeconds :boolean = true):number{
    if (inMilliSeconds){
        return (this._pvt_duration_val * 1000);
    }else {
        return (this._pvt_duration_val);
    }
}
//14-may-2022-The only place to extend duration
public extend(n :number):number {
this._pvt_duration_val += n;
    return this._pvt_duration_val;
}

public append(comp :IComponent,duration :number){
     //--1 : comp.duration cant be > 0 
    if (duration < 1) {
        throw new Error("for Insert operation to succeed you need component duration greater than 0");
    }else {
        comp.duration = duration;    
    }
    //--2 : set comp startTime = bilza.len() now.
    comp.setStartTime(this.len(false));
    //--3 : Add comp duration to this.duration .
    this.extend(comp.duration);
//---finally    
return this.comps.push(comp);
}
public insert(comp :IComponent,startTime :number,duration :number){
    //--1 : comp.duration cant be > 0 
    if (duration < 1) {
        throw new Error("for Insert operation to succeed you need component duration greater than 0");
    }else {
        comp.duration = duration;    
    }

//--------------------------------------    
//--2 : stop if startTime > bil.duration(false);
    comp.setStartTime(startTime);
  if (comp.getStartTime(false) > this.len(false)){
    throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${this.len()} , this creates a blank space of ${Math.ceil(comp.getStartTime() - this.len())} seconds.`);
}
//--3 : now check if endTime of comp is larger than the bil or not (check endTime)
//false means in seconds
    if (comp.getEndTime(false) > this.len()){
    //no need to change anything
    }else {
    let overlap = comp.getEndTime(false) - this.len(false);
    this.extend(overlap);
    }
//---finally    
return this.comps.push(comp);      
} 

public alwaysOn(comp:IComponent):IComponent{
 comp.insertType = comp.insertTypeOptions.AlwaysOn;   
return this.comps.push(comp);
}  
}//duration