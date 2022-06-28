import BaseComponentBase from "./99BaseComponentBase.js";

export default class TimeObj extends BaseComponentBase{
//--28-june-2022 keep this public since when "insert" the engine sets the duration of comps
public  duration :number;
protected  insertTimeInVid:number; 


constructor(){
    super();
    this.duration = 0;
    this.insertTimeInVid = 0; //final-ok    
}

getEndTime(inMilliSec :boolean = true) :number{
let r = this.insertTimeInVid + this.duration; //both r in sec
return inMilliSec ? (r * 1000) : r;
}

getStartTime(inMilliSec :boolean = true) :number{
return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;    
}

//---when we set the start time of a component it starts from that point in the animation. since end time is calculated as startTime + duration so that is also changed automatically.
setStartTime(n :number):number{
this.insertTimeInVid = n;
return this.insertTimeInVid;
}

}//class