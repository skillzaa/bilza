/**
 * You just use
 * setDuration(startFrame :number,endFrame:number):number
 * and this will also set getStartTime,getEndTime and getDuration
 */
export default class Time {
private  endTime:number; 
private  startTime:number; 


constructor(startTime :number,endTime :number){
    this.set(startTime,endTime);
    this.startTime = startTime;    
    this.endTime = endTime;    
}
/**This fn is got engine do not expose to user */
set(startTime :number,endTime :number):number{    
    const dur = endTime - startTime;
    if ((dur < 1) || (typeof dur == "undefined")) {
        throw new Error("please make sure that start time is smaller than end time, also the duration may be too short");
    }
//--assign    
this.startTime = startTime;    
this.endTime = endTime;    
return dur;
}
getDuration():number{  
    const dur =  this.endTime - this.startTime;
//--this check is not required    
    if ((dur < 1) || (typeof dur == "undefined")) {
        throw new Error("please make sure that start time is smaller than end time, also the duration may be too short");
    }
return dur;
}

getStart(inSec :boolean = true) :number{
return inSec ?  this.startTime : (this.startTime * 1000);    
}
getEnd(inSec :boolean = true) :number{
return inSec ?  this.endTime : (this.endTime * 1000);    
}

}//class