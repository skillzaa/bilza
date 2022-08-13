import IFilter from "../filters/IFilter";
import ConstantVal from "../filters/constantVal.js";

export default class AniProp <T>  {
//--this cant be null its not _ret_val of filter its aniProp    
protected _value :T;                 
// protected defaultValue :T;                 
protected filtersArr :IFilter<T>[];       
protected defaultFilter :IFilter<T>;       
//--now that we have default value there is no need for goto at zero in any case the aniProp will have a value it can never be null. However the animated value (from filter) can be null thus _value keep track between default value and animatedValue

constructor(defaultValue :T){
this.filtersArr  = []; 

this.defaultFilter  = new ConstantVal(0,100,defaultValue); 
this._value  = defaultValue; 
//--What if not filter is applied--? then what ? --Then always have 1 filter at frame 0; 
// once inserted can not be deleted just altered.
// this.goto(0,defaultValue); 
}
public update(rTimeMs :number):boolean{
//---STEP-1--find current filter or return defaultValue
const baseGoto = this.getBaseFilter(rTimeMs);
if (baseGoto == null ){
    // this.defaultFilter.update--???????
    this._value = this.defaultFilter.animatedValue();
    return false; //return
}else {
    //--Step-2 --importantay-- VVVVVVV
    baseGoto.update(rTimeMs);
    //---step-3:get value from AniFilter inside gotoObj
    const animatedValue = baseGoto.animatedValue();
            //.........................just to be over sure
            //--just for safety a filter will never send out null
            //---default filter is the baseValue of 
            if (animatedValue !== null){
                this._value = animatedValue;
            }else {
                this._value = this.defaultFilter.animatedValue();
            }
}
//------------------------------------------
return true;
}

public value():T{
return this._value;
}
//--relationship between goto(0) and base value?
 
public set(n :T):T{
this.defaultFilter.setBaseValue(n);
this._value = this.defaultFilter.animatedValue();
 return n;
} 

protected getBaseFilter(rTimeMs :number):IFilter<T> | null{
if (this.filtersArr.length < 1){return null;}    

let lastFrameChecked = 0;
let rez : IFilter<T> | null = null;

    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if ( rTimeMs >= (fil.rTimeMsStart )  ){
            // why >= there hsd be no equal since a frame once checked shd not be present in gotoArray
            if ( (fil.rTimeMsStart ) >= lastFrameChecked ) {
                //--for next iteration
                lastFrameChecked = (fil.rTimeMsStart);
                //--the value                    
                    rez = fil;
            }
        }   
    }
//-------------
return rez;
}


protected addFilter(bfil :IFilter<T>){
    //----?? check if there is a filt;er at that frame
    this.filtersArr.push(bfil);
}

}