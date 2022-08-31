import BaseComponentBase from "./99BaseComponentBase.js";

/**
 * You just use
 * setDuration(startFrame :number,endFrame:number):number
 * and this will also set getStartTime,getEndTime and getDuration
 */
export default class Time extends BaseComponentBase{
private  _endFrame:number | null; 
private  _startFrame:number | null; 


constructor(){
    super();
    this._startFrame = null;    
    this._endFrame = null;    
}
/**This fn is got engine do not expose to user */
setTimings(startFrame :number,endFrame:number):number{    
    const dur = endFrame - startFrame;
    if ((dur < 1) || (typeof dur == "undefined")) {
        throw new Error("please make sure that startFrame is smaller than endFrame");
    }
//--assign    
this._startFrame = startFrame;    
this._endFrame = endFrame;    
return dur;
}
getDuration():number{  
if (this._endFrame ==null || this._startFrame == null){
    throw new Error("duration not yet set, please call setDuration first");
    
}      
    const dur =  this._endFrame - this._startFrame;
    if ((dur < 1) || (typeof dur == "undefined")) {
        throw new Error("please make sure that startFrame is smaller than endFrame");
    }
return dur;
}
getEndTime(inMilliSec :boolean = true) :number{
if (this._endFrame == null){ throw new Error("duration not yet set");}    
let r = this._endFrame; //both r in sec
return inMilliSec ? (r * 1000) : r;
}

getStartTime(inMilliSec :boolean = true) :number{
if (this._startFrame == null){ throw new Error("duration not yet set");}    
return inMilliSec ? (this._startFrame * 1000) : this._startFrame;    
}

}//class