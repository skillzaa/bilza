import BaseFilter from "./baseFilter";
/**
 * 11-8-2022
 * Animation objects are attached to AniProps.
 * 1--Each animationObj has its msDeltaStart and End and has qualifyToRun fn.
 * 2-- It also has a base value which is of type T.
 * 
 * 3-- It has AnimationFilters which return animatedValue() as long as this animation obj is running.
 *  The AnimationFilters are created outside and fed to it.
 * Rule :: Any animation obj is valid as long as there is no animation obj after it on the Time Line. The moment a new animation obj is encountered the prev animationObj cease to be used even if its msDeltaEnd is remaining (i.e it is overwritten in the overlapped region)
 */

export default class AnimationObj <T>{

public msDeltaStart :number;
public msDeltaEnd :number;
public baseValue :T;

public filter :BaseFilter<T>;
//constructor    
constructor(msDeltaStart :number,msDeltaEnd :number , baseValue :T,filter :BaseFilter<T>){
    
    this.msDeltaStart = msDeltaStart;
    this.msDeltaEnd = msDeltaEnd;
    this.baseValue = baseValue;    

    this.filter = filter;
}

public animatedValue(msDelta :number):T{
this.filter.update(msDelta,this.baseValue); 

        let v  = this.filter.animatedValue(); 
            if ( v != null){
                //--internally the filter will add this.value to the value--or what ever the filter does with the baseGotoValue is its own business just return a T
                return v;
            }else {
                return this.baseValue; 
            }
}

// public qualifyToRun(msDelta :number):boolean{
// if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd ) {
//             return false;
//         }else { 
//             return true;
//         }    
// }
}