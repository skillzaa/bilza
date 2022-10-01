
export default class StopWatch {
 //Time stamp of start time be used to generate msDelta (time delata in milli sec)    
private startTimeStamp :number | null;
 
constructor(){
    this.startTimeStamp = null;
}

isRunning():boolean{
if (this.startTimeStamp == null){
    return false;
}else {
    return true;
}
}

stop():boolean{
    this.startTimeStamp = null;
return true;    
}
start():boolean{
    this.startTimeStamp = new Date().getTime();
return true;    
}
public getMsDelta() :number{
    if (this.startTimeStamp ==null){   
            return 0;
    } else{
            let curTime = new Date().getTime();
            return curTime - this.startTimeStamp;
    }
}


}//stop watch