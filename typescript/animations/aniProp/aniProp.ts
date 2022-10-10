import BaseAniProp from "./baseAniProp.js";
import BaseFilter from "../../animations/filters/baseFilter.js"; 
// -------------------------------------------

export default class AniProp <T> extends BaseAniProp<T>  {

constructor(value :T){
super(value);    
}
/**
 * --1--Get the last applied filter. If there is a filter get its value (even if the filter is expired we get its beyond value).
 * --2--If there is no filter inserted just return the AniProp default value.
 * --3-- dont foget to update the filter.
 */
public update(rTimeMs :number):boolean{
//---STEP-1--find current filter or return defaultValue
const baseGoto = this.getBaseFilter(rTimeMs);
if (baseGoto == null ){
    //--just return the default value.BIG ERROR
    // this._filterValue = this.defaultValue;
    return false; //return
}else {
    //--Step-2 --importantay-- VVVVVV
    baseGoto.update(rTimeMs);
    //---step-3:get value from AniFilter inside gotoObj
    this.setFilterValue(baseGoto.filterValue());
}
return true;
}


////////////////////////////////////////
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