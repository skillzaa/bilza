import IFilter from "./IFilter.js";
/**
 * 4-july-2022 :  AniProp and all its child classes all just hold one value (of concrete type number , string etc).
 * It can collect any number of filters in a this.filters array
 * Just like IFilter this too has an update method and a value mathod
 * the update runs alll the filters in its filters array  
 * ANIPROP IS THE SUM OF ALL THE FILTERS RESULT APPLIED AT THAT MSDELTA
 * There is no need for init in this class but later child classes which needs canvasWidth and canvasHeight will require init. in init they will convert the percentages etc into concentrete variables and then load in the Filters.
 * The child classes that uses init have to change the behaviour of this.set and use setInitValue and blockout this.set;
 * The Filter also do not need init with or without AniProp that uses percentages.
 */ 

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

/**
 * 4-july-2022 
 * Confusion between set and setInitValue methods
 * Requirements 1 (compile Time): if aniProp class is burried in a hierarchy and we can not give it default / start / initial vlaue then:
 * ----For classes wihtout init : we can give it through a method called this.set.
 * ----For classes with INIT : we can give it through a method called this.setInitValue which gets translated during init.
 * 
 * Requirements 2 (run time): If aniProp is being used as a normal number so we want the user to be able to manually set it.--very important
 * both can use set just set mathods in classes with init is overwritten so that it translates the value.
 */

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