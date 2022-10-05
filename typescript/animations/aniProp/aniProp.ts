import AniPropDb from "../../animationsFacade/aniPropDb/AniPropDb.js";
import BaseFilter from "../../animationsFacade/filters/baseFilter.js"; 
// -------------------------------------------

export default class AniProp <T>  {
//--this cant be null its not _ret_val of filter ITS aniProp    
protected _value :T | null;                 
protected filtersArr :BaseFilter<T>[];       
protected defaultValue :T;       
//--now that we have default Filter there is no need for goto at zero in any case the aniProp will have a value it can never be null. However the animated value (from filter) can be null thus _value keep track between default value and animatedValue

constructor(aniPropDb :AniPropDb<T>){
this.defaultValue  = aniPropDb.value(); 
this.filtersArr  = aniPropDb.getFiltersArray(); 
this._value  = null; 
}
/**
 * --1--Get the last applied filter. If there is a filter get its value (even if the filter is expired we get its beyond value).
 * --2--If there is no filter inserted just return the AniProp default value.
 * --3-- dont foget to update the filter.
 * @param rTimeMs 
 * @returns 
 */
public update(rTimeMs :number):boolean{
//---STEP-1--find current filter or return defaultValue
const baseGoto = this.getBaseFilter(rTimeMs);
if (baseGoto == null ){
    this._value = this.defaultValue;
    return false; //return
}else {
    //--Step-2 --importantay-- VVVVVV
    baseGoto.update(rTimeMs);
    //---step-3:get value from AniFilter inside gotoObj
    this._value = baseGoto.filterValue();
}
return true;
}
public set(_value :T):T{
this._value = _value;    
return this._value;
}
//--4-sep-2022-Dont change this method. This is the last place to stop AniProp giving out null. AniProp must never give a null since it reprsents a number / string etc which is never null.

public value():T{
//--do not return this._value that is null in start-- this will give a correct result even without an update  
if (this._value == null){
    return this.defaultValue;
} else {
    return this._value;
} 
}
//--5-oct-2022  changed form protected
private getBaseFilter(rTimeMs :number):BaseFilter<T> | null{
    //---shd it be here???    
    if (this.filtersArr.length < 1){return null;}    
    
    let lastFrameChecked = 0;
    let rez : BaseFilter<T> | null = null;
    
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if ( rTimeMs >= (fil.startTimeMs )  ){
                // why >= there hsd be no equal since a frame once checked shd not be present in gotoArray
                if ( (fil.startTimeMs ) >= lastFrameChecked ) {
                    //--for next iteration
                    lastFrameChecked = (fil.startTimeMs);
                    //--the value                    
                        rez = fil;
                }
            }   
        }
//-------------
return rez;
}
////////////////////////////////////////


}