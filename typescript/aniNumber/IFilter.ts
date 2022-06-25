import { FilterState } from "./filterState";
export default interface IFilter{
    // update(msDelta :number,oldValue:number,{}:any):FilterState; 
    update(msDelta :number):FilterState; 
    value():number|null; 
}
