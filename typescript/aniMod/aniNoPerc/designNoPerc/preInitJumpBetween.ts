

export default class  PreInitJumpBetween {

pointOne:number;
pointTwo:number;
msDeltaStart :number;
msDeltaEnd :number;
delayInMS :number;

constructor(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMS :number=0){

    this.msDeltaStart = msDeltaStart; 
    this.msDeltaEnd = msDeltaEnd; 
    this.pointOne = pointOne; 
    this.pointTwo = pointTwo; 
    this.delayInMS = delayInMS;    
}
}
