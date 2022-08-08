import IFilter from "../animationDesign/IFilter.js";
import GotoData from "./gotoData.js";
/**
 * 4-july-2022 :  AniProp and all its child classes all just hold one value (of concrete type number , string, boolean etc).
 * It can collect any number of filters in a this.filters array
 * Just like IFilter this too has an update method and a value mathod
 * the update runs alll the filters in its filters array
 * ANIPROP IS SUM OF ALL FILTER AT ANY GIVEN MSDELTA  
 * ANIPROP IS THE SUM OF ALL THE FILTERS RESULT APPLIED AT THAT MSDELTA
 * There is no need for init in this class but later child classes which needs canvasWidth and canvasHeight will require init. in init they will convert the percentages etc into concentrete variables and then load in the Filters.
 * The child classes that uses init have to change the behaviour of this.set and use set and over-write this.set;
 * The Filter also do not need init with or without AniProp that uses percentages.
 * --8-8-2022 : The filters may return a value or return null but aniProp will never return null.
 */ 

export default class AniProp <T> {
//--this cant be null its not _ret_val of filter its aniProp    
private _value :T;                 
protected filters :IFilter<T>[];
protected GotoDataArray :GotoData<T>[];
public readonly defaultValue :T;    
public  lastGotoValue :T;    

constructor(defaultValue :T){
//----readonly
this.defaultValue = defaultValue;
this.lastGotoValue = defaultValue;
this._value  = defaultValue; 

//--Filters array
this.filters = [];
//--GotoDataArray
this.GotoDataArray = [];
}

update(msDelta :number):boolean{

if (this.runFilters(msDelta) ==true) {return true;}

 this.runLastGoto(msDelta);
    // return true;
// }else {
//     this.runDefaultValue();
// }

//--this will return false

return false;
}

public value():T{
return this._value;
}

/**
 * 4-july-2022 
 * Confusion between set and set methods
 * Requirements 1 (compile Time): if aniProp class is burried in a hierarchy and we can not give it default / start / initial vlaue then:
 * ----For classes wihtout init : we can give it through a method called this.set.
 * ----For classes with INIT : we can give it through a method called this.set which gets translated during init.
 * 
 * Requirements 2 (run time): If aniProp is being used as a normal number so we want the user to be able to manually set it.--very important
 * both can use set just set mathods in classes with init is overwritten so that it translates the value.
 */

public set(n :T):T{
 this._value = n;
 return this._value;
}

public goto(startTimeSec :number,theValue :T ){
    //--converting frame into milli second
    const v = new GotoData(startTimeSec * 1000,theValue);
    this.GotoDataArray.push(v);
}
private runDefaultValue(){
    this._value = this.defaultValue;
}
private runLastGoto(msDelta :number):number | boolean{
if (this.GotoDataArray.length < 1){return false;}    
let found = false;
let frame = 0;
// const inter = null;
    for (let i = 0; i < this.GotoDataArray.length; i++) {
        const elm = this.GotoDataArray[i];
        if ( msDelta >= (elm.frame )  ){
            if ( (elm.frame ) >= frame ) {
                    frame = (elm.frame);
                    this._value = elm.value;
                    found = true;
            }
        }   
    }
return found;
}


private runFilters(msDelta :number):boolean{
let filterWasRun = false;    
    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];

        ani.update(msDelta);
        let v  = ani.value(); 
            if ( v != null){
                filterWasRun = true;
                this._value = v;
            }
} 
return filterWasRun;
}

} 