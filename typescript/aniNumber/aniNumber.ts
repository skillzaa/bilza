
import PreInitIncDec from "./preInitIncDec.js";
import Increment from "../filters/incDec/increment.js";
import Decrement from "../filters/incDec/decrement.js";
import Vibrate from "../filters/vibrate.js";
import IFilter from "../design/IFilter.js";
import GotoArray from "./gotoArray.js";

export default class AniNumber {
    //--this is the only output from this obj and we do NOT want to send out null BUT filters can be null and we dont consider that
    private _value :number;                 
    
    private preInitIncDec :PreInitIncDec[];
    private gotoArray :GotoArray[];
    //------------------
    private filters :IFilter[];
    
constructor(defaultValue :number=0){
// place 1/2 to set this._ret_value
    this._value  = defaultValue; 
    
    this.preInitIncDec = [];
    this.gotoArray = [];

    this.filters = [];
}
//We need init to convert preInit arrays into filters
// init(): boolean {
// //---- This is the first 2 filters OR  1-filter 2 blends
// // this.initIncDec();
// // this.initGoto(); There is nothing to init since the values are translated
//     return true;
// }
update(msDelta :number):boolean{
// this.runGoto(msDelta);
this.runFilters(msDelta);
return true;    
}
public value():number{
return this._value;
}

private runGoto(msDelta :number){
    for (let i = 0; i < this.gotoArray.length; i++) {
        const gotoItem = this.gotoArray[i];
    if ( (gotoItem.atFrame * 1000) <= msDelta){
        this._value = gotoItem.value;
        this.gotoArray.splice(i,1); ////important remove it;
    }   
} 
}

public set(n :number){
 this._value = n;
 return this._value;
} 

public animate(from :number,to :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let c = new Increment(from,to,startValue,endValue);
        this.filters.push(c);
    }else {
        let c = new Decrement(from,to,startValue,endValue);
        this.filters.push(c);
    }
}
public vibrate(from :number,to :number,seed :number=10,offset :number=10,delay :number=0){
    const v = new Vibrate(from,to,seed,offset,delay);
    this.filters.push(v);
}

private runFilters(msDelta :number){
    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];
        //---keep this._value and {} for later use
        ani.update(msDelta);
        let v  = ani.value(); 
            if ( v != null){
                //--place 2 of 2 where _ret_value is changed
                this._value = v;
            }
} 
}

} 