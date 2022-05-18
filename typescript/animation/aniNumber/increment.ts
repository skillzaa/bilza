

export default class Increment{
public from :number;
public to :number;
private startValue :number;
private endValue :number;
private readonly DELAYCOUNTER :number;
private lastMsDelta :number;
private val :number;

constructor(from :number,to :number,startValue :number,endValue :number){
this.from = from;
this.to = to;
this.startValue = startValue;
this.endValue = endValue;
let xDiff   =   endValue - startValue;
let timeDiff   =   (to - from) * 1000;//--convert into milli seonds
//--INCREMENT IS  actually the number  of milliseconds after which 1 pixel will be moved forward
this.DELAYCOUNTER = Math.ceil(timeDiff / xDiff); 
this.lastMsDelta = 0; 
this.val = this.from; 
}

update(msDelta :number):boolean{
if (this.lastMsDelta == 0 ) {this.lastMsDelta = msDelta;}
        if (msDelta > (10000) && msDelta < (20000)  ){
            if ( (msDelta - this.lastMsDelta) > this.DELAYCOUNTER ){
                this.val = this.val  + 1; 
                this.lastMsDelta = msDelta;
            }
        }
    // if (msDelta > (this.from *1000) && msDelta < (this.to *1000)  ){
    //     this.val = this.val  + 1; 
    // }
return true;
}

value():number{
    return this.val;
}


} 