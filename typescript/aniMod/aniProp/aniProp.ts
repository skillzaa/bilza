import IFilter from "../IFilter.js";
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
protected _value :T;                 

protected filters :IFilter<T>[];
protected gotoArray :GotoData<T>[];                
 

constructor(defaultValue :T){
    this.gotoArray  = []; 
    this.filters  = []; 
    this.goto(0,defaultValue);
    this._value  = defaultValue; 
}
public update(msDelta :number):boolean{
//---STEP-1
this.getBaseGotoValue(msDelta);
//---step-2:runFilters will alwys return number either change this._value  or not
this._value = this.runFilters(msDelta , this._value);
//------------------------------------------
return true;
}

public value():T{
return this._value;
}

public set(n :T):T{
this._value  = n;// just to keep it in sync with goto    
 this.goto(0,n);
 return n;
} 

private runFilters(msDelta :number , baseGotoValue :T):T{
let rez  =  baseGotoValue;

    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];
        if (ani.qualifyToRun(msDelta) == false) {continue;}
        ani.update(msDelta,rez); 
        let v  = ani.value(); 
            if ( v != null){
                rez = v;
            }
} 
return rez;
}

private getBaseGotoValue(msDelta :number):boolean{
if (this.gotoArray.length < 1){return false;}    

let lastFrameChecked = 0;
let rez :T | null = null;

    for (let i = 0; i < this.gotoArray.length; i++) {
        const elm = this.gotoArray[i];
        if ( msDelta >= (elm.msDelta )  ){
            // why >= there hsd be no equal since a frame once checked shd not be present in gotoArray
            if ( (elm.msDelta ) >= lastFrameChecked ) {
                //--for next iteration
                lastFrameChecked = (elm.msDelta);
                //--the value                    
                    rez = elm.value;
            }
        }   
    }
//-------------
        if (rez !== null){ 
            this._value = rez;
            return true;
        }    else { return false; }
}


public goto(msDelta :number,value :T):boolean{
//--first search if the frame already exists or not if it do then dont duplicate
//--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY
    for (let i = 0; i < this.gotoArray.length; i++) {
        const gotoItem = this.gotoArray[i];
        if (gotoItem.msDelta == msDelta){
            gotoItem.value = value;
            return false; // goto frame edited and not added
        }
    }
    //---write code here.......
    const v = new GotoData<T>(msDelta,value);
    this.gotoArray.push(v);
    return true;//// new goto frame ADDED 
}



}