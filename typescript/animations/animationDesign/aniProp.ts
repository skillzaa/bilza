import IFilter from "./IFilter.js";
 

export default class AniProp <T> {
//--this cant be null its not _ret_val of filter its aniProp    
private _value :T;                 
protected filters :IFilter<T>[];
    
constructor(defaultValue :T){
this._value  = defaultValue; 
this.filters = [];
}

update(msDelta :number):boolean{
this.runFilters(msDelta);
return true;    
}

public value():T{
return this._value;
}

//--We can use set any time IF the prop is not percent based incase of percentages they need init and can not be used during compile time just during run time
public set(n :T){
 this._value = n;
 return this._value;
} 

private runFilters(msDelta :number){
    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];

        ani.update(msDelta);
        let v  = ani.value(); 
            if ( v != null){
                this._value = v;
            }
} 
}

} 