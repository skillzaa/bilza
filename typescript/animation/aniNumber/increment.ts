

export default class Increment{
private readonly FROM :number;
private readonly TO :number;
private readonly STARTVALUE :number;
private readonly ENDVALUE :number;

private  readonly timeDiff :number;
private  readonly xDiff :number;

private    val :number|null;

constructor(from :number,to :number,startValue :number,endValue :number){
this.FROM =  this.getFrom(from);
this.TO = this.getTo(to);
this.STARTVALUE = startValue;
this.ENDVALUE = endValue;

this.timeDiff = this.TO - this.FROM;
this.xDiff = this.ENDVALUE - this.STARTVALUE;
//--to store between update and value
//--18-may2022 - i thought about it and this.val = null seems correct since we can indicate that this filter is not applicable ; 
this.val = null; //--???
}

update(msDelta :number):boolean{
    if (msDelta > (this.FROM) && msDelta <= (this.TO)  ){
        
        const timeLapsed = this.getTimeLapsed(msDelta);
        const timePerc = Math.ceil((timeLapsed/this.timeDiff)*100);
        if (timePerc < 0 || timePerc > 100  ){
            throw new Error("timePerc error: timePerc can only be between 0 and 100");
        }
        const xPerc = Math.ceil(this.xDiff/100 * timePerc);
        this.val = this.STARTVALUE + xPerc; 
        return true;
    }else {
        this.val = null;
        return false;
    }
}

value():number | null{
    return this.val;
}

//////////////////////////////
private getTimePerc(to :number){

}
private getTo(to :number):number{
if (this.TO <= this.FROM){
    throw new Error("From value must be smaller than the To value");
}    
return to * 1000;
}
private getFrom(from :number):number{
// if (from < 1 ){
//     return 1000;
// } else {
    return from * 1000;
// }   
}
private getTimeLapsed(msDelta :number):number{
    if (msDelta > this.TO){throw new Error("getTimeLapsed error");}
    return Math.ceil(msDelta - this.FROM);
}


} 