
import BaseFilter from "../../animations/filters/baseFilter.js"; 

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/**
 * BaseAniProp just has the base value if there are no filters.
 * This base value will be sent out from value  
 */
export default class BaseAniProp <T> {
    
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//--baseValue is if there is no filter attached to this prop. it is totally seperate from _value which initially is null unless set by filter
//-Do not confuse the baseValue of filter with baseValue of AniProp. The base value here is IF  THERE IS NO FILTER ATTACHED. if there is a filter then we use filters base value.
private baseValue :T;  

//-- _value is actually _animatedValue or filters value. if set 
private _filterValue :T |null  

protected filtersArr :BaseFilter<T>[];  

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
constructor(value :T){
this.baseValue = value;     
this.filtersArr  = [];     
this._filterValue = null;
}

public getBaseValue():T{
return this.baseValue;    
}
//---Big learning to set we set the baseValue / initial value the _filterValue is set by filters
public set(value :T):T{
this.baseValue = value;    
return this.baseValue;
}
protected setFilterValue(value :T | null):T | null{
this._filterValue = value;    
return this._filterValue;
}

public value():T{
//--do not return this._value that is null in start-- this will give a correct result even without an update  
if (this._filterValue == null){
    return this.baseValue;
} else {
    return this._filterValue;
} 
}
protected addFilter(bfil :BaseFilter<T>){
    //----?? check if there is a filt;er at that frame
    //--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.startTimeMs == bfil.startTimeMs ){
            throw new Error( `There is another animation inserted at exectly this frame (number ${fil.startTimeMs}) for this prop, please either remove the previous animation or change time of your new animation`);
        }
            
        }
this.filtersArr.push(bfil);
}

////////////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////////


}