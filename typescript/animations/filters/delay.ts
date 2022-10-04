


export default class Delay {

public readonly delayValue:number;
private lastFrameRun :number | null;

constructor(delaySec :number){
this.delayValue = delaySec;    
this.lastFrameRun = null;    
}

public isSegChanged(rTimeMs :number):boolean{
//--if null then it is the first time Or being drawn without start    
        if (this.lastFrameRun == null){
            this.lastFrameRun   = rTimeMs; //load it for next time
            return true;
        }    
//-------------------------------------------
//-- This result should not be negative since time does not moves backward. if it is -ve then we consider it as first time  some one is running the frames in jumbled up form.
const lapsed = rTimeMs - this.lastFrameRun;        
        if (lapsed <= 0){ 
            return true; //again start fresh
        }    

        
//----now the actual segChange
        if (this.delayValue <= lapsed ){
            this.lastFrameRun   = rTimeMs;  
            return true;
        }else {
            return false;
        }
}


}