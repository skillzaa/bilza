import BaseFilter from "../baseFilter.js";

export default class JumpBetween extends BaseFilter  {

private    pointOne:number;
private    pointTwo:number;

constructor(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMS :number=0){

super(msDeltaStart,msDeltaEnd,delayInMS);    
    
this.pointOne = pointOne;
this.pointTwo = pointTwo;
}

public update(msDelta: number, baseGotoValue: number): boolean {
    
    if (baseGotoValue !== this.pointOne){
        this._ret_val =  this.pointOne;
    }else {
        this._ret_val =  this.pointTwo;
    }  
return true;      
}
init(canvasWidthHeight: number): boolean {
this.pointOne = this.percToPix(canvasWidthHeight,this.pointOne);
this.pointTwo = this.percToPix(canvasWidthHeight,this.pointTwo);
return true;
}       
}
