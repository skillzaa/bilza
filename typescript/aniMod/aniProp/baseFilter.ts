
export default class BaseFilter<T>{
    
private  _animatedValue :T | null;

public  msDeltaStart :number;
public  msDeltaEnd :number;

private delayInMS :number;
private delayInMSCounter :number;
private incommingData : T[];

constructor(msDeltaStart :number,msDeltaEnd :number,delayInMS :number=0,incommingData=[]){

this.delayInMS = delayInMS;
this.delayInMSCounter = 0;
this.incommingData = incommingData;

this._animatedValue = null;

if (msDeltaStart < 0 || msDeltaEnd < 0 ){throw new Error("time can not be negative");}

if (msDeltaEnd <= msDeltaStart ){throw new Error("end Time can not be equal or smaller than start time");}    

this.msDeltaStart = msDeltaStart ; 
this.msDeltaEnd = msDeltaEnd; 
}

public update(msDelta :number,baseValue :T):boolean{
return  true;
}


////////////////////////////////////////
// init(canvasWidthHeight: number): boolean {
//     return true;
// }
// protected percToPix(canvasWidthHeight:number, perc :number){
//     return ((canvasWidthHeight /100) * perc);
// }
animatedValue(): T | null {
    return this._animatedValue;
}
// protected xFramesSkipped(msDelta :number):boolean{
//     // if (this.delayInMSCounter < this.skipXframes) {
//     //         this.skipframesCounter += 1 ;
//     //         return false;
//     // }else {
//     //     this.skipframesCounter = 0;
//     //     return true;
//     // }
//     return true;
// }

}