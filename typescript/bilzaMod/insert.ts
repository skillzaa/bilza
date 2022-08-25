import {IComponent,Pack} from "../bilza.js";
import Comps from "./comps.js";
import Duration from "./duration.js";
import IScene from "../scene/IScene.js";

export default class Insert {
private duration :Duration;     
private comps :Comps;
private charsWidth :(chars:string,fontSize:number,fontName:string)=>number;

constructor(comps :Comps,duration :Duration,charsWidth:(chars:string,fontSize:number,fontName:string)=>number){
this.comps = comps;  
this.duration = duration;  
this.charsWidth =   charsWidth;
}
/**
 * The scene must not have a component which runs before scene start time or after scene endTime
 */
public insertScene (scene :IScene){
    const comps = scene.getComps();
for (let i = 0; i < comps.length; i++) {
    const comp = comps[i];
        //--- The checking
        if ( comp.getStartTime(false) < scene.getStartTime() ){
        throw new Error("The start time of a contained component in a scene can not be smaller than the start time of the scene");
        }
        if ( comp.getEndTime(false) > (scene.getEndTime()) ) {
        throw new Error("The end time of a contained component in a scene can not be larger than the end time of the scene");
        }

    this.add(comp,comp.getStartTime(false),comp.getEndTime());
}
}
public append(comp :IComponent,duration :number){
    //--This charsWidth is a function ref from Pack so that components can find the width of some chars with out Pack
    comp.charsWidth = this.charsWidth;
    const startingFrame = this.duration.len(false);
    const endFrame = startingFrame + duration;
     //--1 : comp.duration cant be > 0 
     comp.setDuration(startingFrame,endFrame);
    
    //--2 : Add comp duration to this.duration .
    this.duration.extend(comp.getDuration());
//---finally    
return this.comps.push(comp);
}
//-21-6-2022 previously blank frame between startTime and Video.len were not allowed BUT now we allow it the gap is just inserted.
public add(comp :IComponent,startTime :number,endFrame :number){
    comp.charsWidth = this.charsWidth;
        //--1 : comp.duration cant be > 0 
    comp.setDuration(startTime,endFrame);    
//--------------------------------------    
//--2 : stop if startTime > bil.duration(false);
  if (comp.getStartTime(false) > this.duration.len(false)){
    this.duration.set(comp.getStartTime(false));
}
//--3 : now check if endTime of comp is larger than the bil or not (check endTime)
//false means in seconds
    if (comp.getEndTime(false) > this.duration.len(false)  ){
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


