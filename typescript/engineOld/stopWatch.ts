
export default class StopWatch {
private _stopFlag :boolean;

//--change to runningStartTime
private runningStartTimeTS :number | null; //when we start video
 
constructor(){
    this.runningStartTimeTS = null;
    this._stopFlag = true;
}

isRunning():boolean{
if (this.runningStartTimeTS == null){
    return false;
}else {
    return true;
}
}
//--???
shouldStop():boolean{
 return this._stopFlag;
}
stop():boolean{
    this.runningStartTimeTS = null;
    this._stopFlag = true; 
return true;    
}
start():boolean{
    this._stopFlag = false; 
    this.runningStartTimeTS = new Date().getTime();
return true;    
}
public getMsDelta() :number{
    if (this.runningStartTimeTS ==null){   
            return 0;
    } else{
            let curTime = new Date().getTime();
            return curTime - this.runningStartTimeTS;
    }
}


}//stop watch