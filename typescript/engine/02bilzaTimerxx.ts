import CompArrayObj from "./01compsArrayObj.js";

export default class BilzaTimer extends CompArrayObj {
 
protected interval : number | null;
protected  msPerFrame :number; //????
protected timeStart :number | null; //when we start video
protected timeEnd :number; //the size of video-length in milli seconds
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (timeEndSec:number){
super(); 
this.timeStart = null; 
this.timeEnd = timeEndSec * 1000; //to convert into milli sec
this.interval = null; //to save setInterval handler
this.msPerFrame = 1000;
} 

//Timer
getTimeEnd():number{
return this.timeEnd;
}
//Timer
setTimeEnd(n :number) :number{
this.timeEnd = n;
return this.timeEnd;
}

protected getMsDelta() :number{
if (this.timeStart ==null){   
    return 0;
} else{
let curTime = new Date().getTime();
return curTime - this.timeStart;
}
}
public setMsDelta(n :number) :number{
if (this.timeStart ==null){ return 0;}//error bilza not running
if (n > this.getTimeEnd() || n < 0){return 0;}//0 = this.timeStart
this.timeStart = new Date().getTime() - n;
return this.timeStart;
}


stop():boolean{
    this.timeStart = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
return true;    
}

}//ends