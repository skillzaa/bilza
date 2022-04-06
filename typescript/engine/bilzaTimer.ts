import CompArrayObj from "./compsArrayObj.js";

export default class BilzaTimer extends CompArrayObj {
 
protected interval : number | null;
protected  msPerFrame :number; //????
protected timeStart :number | null; //the size of video-length in milli seconds
protected timeEnd :number; //the size of video-length in milli seconds
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor (timeEnd=Number.MAX_SAFE_INTEGER){
super();
this.timeStart = null; 
this.timeEnd = timeEnd;
this.interval = null;
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


stop():boolean{
    this.timeStart = null;
    if (this.interval !== null){
        clearInterval(this.interval);
    }
return true;    
}

}//ends