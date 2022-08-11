import FiltersCol from "./filtersCol.js";

export default class AniProp <T> extends FiltersCol <T> {
//--this cant be null its not _ret_val of filter its aniProp    
protected _value :T;                 
 

constructor(defaultValue :T){
super();    
this._value  = defaultValue; 
//--What if not filter is applied--? then what ? --Then always have 1 filter at frame 0; 
// once inserted can not be deleted just altered.
this.goto(0,defaultValue); 
}
public update(msDelta :number):boolean{
//---STEP-1
const baseGoto = this.getBaseFilter(msDelta);
//---step-2:get value from AniFilter inside gotoObj
const animatedValue = baseGoto.animatedValue(msDelta);

//---step 3 Apply Filters
// this._value = this.runFilters(msDelta , this._value);
//---step 4 Assign the value
this._value = animatedValue;
//------------------------------------------
return true;
}

public value():T{
return this._value;
}
//--relationship between goto(0) and base value?
 
public set(n :T):T{
this._value  = n;// just to keep it in sync with goto    
 this.goto(0,n);
 return n;
} 







}