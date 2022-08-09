import BaseFilter from "../baseFilter.js";

export default class JumpBetween extends BaseFilter  {

private    pointOne:number;
private    pointTwo:number;

constructor(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMS :number=0){

super(msDeltaStart,msDeltaEnd,delayInMS);    
    
this.pointOne = pointOne;
this.pointTwo = pointTwo;
}

public value(msDelta: number, baseGotoValue: number): number | null {
    
    if (baseGotoValue !== this.pointOne){
        return this.pointOne;
    }else {
        return this.pointTwo;
    }    
}

}
