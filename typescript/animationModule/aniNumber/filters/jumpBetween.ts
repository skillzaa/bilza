import BaseFilter from "./baseFilter.js.js";

export default class JumpBetween extends BaseFilter  {

private    pointOne:number;
private    pointTwo:number;

constructor(rTimeMsStart :number,rTimeMsEnd :number,pointOne :number=1, pointTwo :number=10,delayInMS :number=0){

super(rTimeMsStart,rTimeMsEnd,delayInMS);    
    
this.pointOne = pointOne;
this.pointTwo = pointTwo;
}

public update(rTimeMs: number, baseGotoValue: number): boolean {
    
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
