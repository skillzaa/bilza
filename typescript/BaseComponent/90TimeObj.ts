import BaseComponentBase from "./99BaseComponentBase.js";

export default class TimeObj extends BaseComponentBase{

public  duration :number;

/////////////////----PRIVATE----/////////////////// 
protected  insertTimeInVid:number; 


constructor(){
    super();
    this.duration = 0; //can not be changed again even not by children comps
    this.insertTimeInVid = 0; //final-ok
    
}

getEndTime(inMilliSec :boolean = true) :number{
let r = this.insertTimeInVid + this.duration; //both r in sec
return inMilliSec ? (r * 1000) : r;
}
getStartTime(inMilliSec :boolean = true) :number{
return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;    
}
setStartTime(n :number):number{
this.insertTimeInVid = n;
return this.insertTimeInVid;
}
}//claass