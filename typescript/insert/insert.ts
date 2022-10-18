import Duration from "./duration.js";
 import CompEngine from "../compEngine/compEngine.js";


////////////////////////////////////////////////////////// 
export default class Insert {
private duration :Duration;     

constructor( ){
this.duration = new Duration();  
}


public add(comp :CompEngine){
if (comp.time == null){throw new Error("Time object = null");}
//--------------------------------------    
//--1 : Blank Frames :: if startTime > bil.duration(false);
//--- use false with in if statement and true in duration.set
  if (comp.time.getStart(false) > this.duration.len(false)){
    this.duration.set(comp.time.getStart(true));
}
//--3 : now check if endTime of comp is larger than the bil or not (check endTime). true means in seconds
    if (comp.time.getEnd(false) > this.duration.len(false)  ){
        let overlap = comp.time.getEnd(true) - this.duration.len(true);
        this.duration.extend(overlap);
    }
} 
getDuration(inSec :boolean=true):number{
return this.duration.len(inSec);
}


}
// public append(comp :IComponent,duration :number){
    // if (comp.time == null){throw new Error("Time object = null");
// }
//     //--This charsWidth is a function ref from Pack so that components can find the width of some chars with out Pack
//     comp.charsWidth = this.charsWidth;
//     const startingFrame = this.duration.len(false);
//     const endFrame = startingFrame + duration;
//      //--1 : comp.duration cant be > 0 
//      comp.setTimings(startingFrame,endFrame);
    
//     //--2 : Add comp duration to this.duration .
//     this.duration.extend(comp.getDuration());
// //---finally    
// return this.comps.push(comp);
// }



