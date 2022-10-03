import Duration from "./duration.js";
// import IScene from "../../scene/IScene.js";
 import CompEngine from "../compEngine/compEngine.js";

export default class Insert {
private duration :Duration;     

constructor( ){
this.duration = new Duration();  
}
/*
 The scene must not have a component which runs before scene start time or after scene endTime --
*/
// public addScene (scene :IScene){
// //--the scene already has its duration set
// //---get all the comps    
// const comps = scene.getComps();
//     for (let i = 0; i < comps.length; i++) {
//         const comp = comps[i];
//     this.add(comp,comp.getStartTime(false),comp.getEndTime(false) );
//     }
// }
//-21-6-2022 previously blank frame between startTime and Video.len were not allowed BUT now we allow it the gap is just inserted.
public add(comp :CompEngine){
    if (comp.time == null){throw new Error("Time object = null");
    }
//--------------------------------------    
//--1 : Blank Frames :: if startTime > bil.duration(false);
  if (comp.time.getStart(false) > this.duration.len(false)){
    this.duration.set(comp.time.getStart(false));
}
//--3 : now check if endTime of comp is larger than the bil or not (check endTime). true means in seconds
    if (comp.time.getEnd(true) > this.duration.len(true)  ){
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



