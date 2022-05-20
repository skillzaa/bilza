export default interface IFilter{
    update(msDelta :number):boolean; 
    value():number|null; 
    // FROM:number; 
    // TO:number; 

}
