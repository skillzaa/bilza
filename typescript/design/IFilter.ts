import { FilterState } from "./filterState";
export default interface IFilter{
    update(msDelta :number,data ?:any):FilterState; 
    value():number|null; 
}
