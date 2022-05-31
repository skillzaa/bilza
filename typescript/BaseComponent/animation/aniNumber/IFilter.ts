export default interface IFilter{
    update(msDelta :number):boolean; 
    value():number|null; 
    isExhausted():boolean;
    // FROM:number; 
    // TO:number; 

}
