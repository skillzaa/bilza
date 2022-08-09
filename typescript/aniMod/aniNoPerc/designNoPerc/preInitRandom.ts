

export default class  PreInitRandom {
    msDeltaStart :number;
    msDeltaEnd :number;
    min :number=0;
    max :number=100;
    delayInMilliSec :number=0;
constructor(msDeltaStart :number,msDeltaEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
    
    this.msDeltaStart = msDeltaStart;
    this.msDeltaEnd = msDeltaEnd;
    this.min = min;
    this.max = max;
    this.delayInMilliSec = delayInMilliSec;
}
}
