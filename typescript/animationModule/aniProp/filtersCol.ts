import BaseFilter from "../filters/baseFilter.js";
import ConstantVal from "../filters/constantVal.js";

export default class FiltersCol<T> {
private filtersArr :BaseFilter<T>[];                

constructor(){
    this.filtersArr  = []; 
}

protected getBaseFilter(rTimeMs :number):BaseFilter<T>{
if (this.filtersArr.length < 1){throw new Error("BaseGoto not found");}    

let lastFrameChecked = 0;
let rez : BaseFilter<T> | null = null;

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
if (rez ==null){ throw new Error("BaseGoto not found");}
return rez;
}

public goto(rTimeMs :number,value :T):BaseFilter<T>{
//--first search if the frame already exists or not if it do then dont duplicate
//--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.rTimeMsStart == rTimeMs){
            fil.baseValue = value;
            return fil; // goto frame edited and not added
        }
    }
    //---The value is base value for filter
    const v = new BaseFilter<T>(rTimeMs,rTimeMs + 1000,value,0);
    this.addFilter(v);
    return v;//// new goto frame ADDED 
}

protected addFilter(bfil :BaseFilter<T>){
    this.filtersArr.push(bfil);
}
}