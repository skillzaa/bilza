import IAniFilter from "../aniNumber/aniFilters/IAniFilter";


export default class GotoObj <T>{
protected aniFilters :IAniFilter<T>[];
public msDelta :number;
public value :T;

constructor( msDelta :number , value :T){
    this.msDelta = msDelta;
    this.aniFilters = [];
    this.value = value;    
}
// public applyAniFilter(msDelta :number):T | null{

//     for (let i = 0; i < this.aniFilters.length; i++) {
//         const ani = this.aniFilters[i];
//         if (ani.qualifyToRun(msDelta) == false) {continue;}
//         ani.update(msDelta); 
//         let v  = ani.value(); 
//             if ( v != null){
//                 return v; //return
//             }
// } 
// return null;
// }
}