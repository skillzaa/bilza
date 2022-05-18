
export default interface IFilter{
    update(msDelta :number):boolean; 
    value():number; 
    from:number; 
    to:number; 

}
