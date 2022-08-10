import IAniFilter from "../aniNumber/aniFilters/IAniFilter";


export default class GotoObj <T>{
public aniFilters :IAniFilter<T>[];
public msDelta :number;
public value :T;

constructor( msDelta :number , value :T){
    this.msDelta = msDelta;
    this.aniFilters = [];
    this.value = value;    
}

public getAnimatedValue(msDelta :number):T{

    for (let i = 0; i < this.aniFilters.length; i++) {
        const ani = this.aniFilters[i];
        if (ani.qualifyToRun(msDelta) == false) {continue;}

        ani.update(msDelta); 
        let v  = ani.value(); 
            if ( v != null){
                //--internally the filter will add this.value to the value--or what ever the filter does with the baseGotoValue is its own business just return a T
                return v;
            }
}
//---- if no value found just return the orignal value
return this.value; 
}


}