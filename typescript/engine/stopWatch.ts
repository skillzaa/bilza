

export default class StopWatch {
private interval : number | null; 
//??
private  msPerFrame :number; //????
//--change to runningStartTime
private runningStartTimeTS :number | null; //when we start video

constructor(){
    this.runningStartTimeTS = null;
    this.interval = null; 
    this.msPerFrame = 100;
}
start(drawFn:()=>boolean) :boolean{
    this.stop();
        this.runningStartTimeTS = new Date().getTime();
        this.interval = window.setInterval(()=>{
            drawFn();
        },this.msPerFrame);
        return true;
}
isAlreadyRunning():boolean{
if (this.runningStartTimeTS !== null){
    return false;
}else {
    return true;
}
}
stop():boolean{
    this.runningStartTimeTS = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
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