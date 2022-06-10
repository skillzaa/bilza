import {IComponent,Pack} from "../Bilza.js";
import Comps from "./comps.js";
import Duration from "./duration.js";

export default class Insert {
private duration :Duration;     
private comps :Comps;
private charsWidth :(chars:string,fontSize:number,fontName:string)=>number;

constructor(comps :Comps,duration :Duration,charsWidth:(chars:string,fontSize:number,fontName:string)=>number){
this.comps = comps;  
this.duration = duration;  
this.charsWidth =   charsWidth;
}

public append(comp :IComponent,duration :number){
    //???????????????
    comp.charsWidth = this.charsWidth;
     //--1 : comp.duration cant be > 0 
    if (duration < 1 || (typeof duration == "undefined")) {
        throw new Error("for Insert operation to succeed you need component duration greater than 0");
    }else {
        //--so we dont need to assign comp.duration before insert it happes here so instead of 
        //bil.insert.append(tst, tst.duration);
        //we can write
        // /bil.insert.append(tst, 20);
        comp.duration = duration;    
    }
    //--2 : set comp startTime = bilza.len() now.
    comp.setStartTime(this.duration.len(false));
    //--3 : Add comp duration to this.duration .
    this.duration.extend(comp.duration);
//---finally    
return this.comps.push(comp);
}
public add(comp :IComponent,startTime :number,duration :number){
    comp.charsWidth = this.charsWidth;
        //--1 : comp.duration cant be > 0 
    if ((duration < 1) || (typeof duration == "undefined")) {
        throw new Error("for Insert operation to succeed you need component duration greater than 0");
    }else {
        //so we dont need to assign duration before
        //this reduces thousands of code lines
        comp.duration = duration;    
    }

//--------------------------------------    
//--2 : stop if startTime > bil.duration(false);
    comp.setStartTime(startTime);
  if (comp.getStartTime(false) > this.duration.len(false)){
    throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${comp.getStartTime()} where as the end time of current video at this time is ${this.duration.len()} , this creates a blank space of ${Math.ceil(comp.getStartTime() - this.duration.len())} seconds.`);
}
//--3 : now check if endTime of comp is larger than the bil or not (check endTime)
//false means in seconds
    if (comp.getEndTime(false) > this.duration.len()){
    //no need to change anything
    }else {
    let overlap = comp.getEndTime(false) - this.duration.len(false);
    this.duration.extend(overlap);
    }
//---finally    
return this.comps.push(comp);      
} 

public alwaysOn(comp:IComponent):IComponent{
    comp.charsWidth = this.charsWidth;    
 comp.alwaysOn = true;   
return this.comps.push(comp);
}  
}//duration