import LocItem from "./locItem.js";

export default class PreInitArray {
fromLocItem :LocItem;
toLocItem :LocItem; 
timeFrom :number;
timeTo :number;
constructor(timeFrom:number,timeTo :number,fromLocItem :LocItem,toLocItem :LocItem){
    this.fromLocItem = fromLocItem  ;
    this.toLocItem = toLocItem  ;
    this.timeFrom = timeFrom  ;
    this.timeTo = timeTo  ;
}

}