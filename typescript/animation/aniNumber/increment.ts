

export default class Increment{
private startTime :number;
private endTime :number;
private startValue :number;
private endValue :number;
private increment :number;
private val :number;

constructor(startTime :number,endTime :number,startValue :number,endValue :number){
this.startTime = startTime;
this.endTime = endTime;
this.startValue = startValue;
this.endValue = endValue;
let xDiff   =   endValue - startValue;
let timeDiff   =   endTime - startTime;
this.increment = Math.ceil(timeDiff / xDiff); 
this.val = this.startTime; 
}

update(msDelta :number):boolean{
    this.val = this.val  + this.increment; 
    return true;
}
value():number{
    return this.val;
}


} 