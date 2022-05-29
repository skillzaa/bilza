import LocItem from "./locItem.js";

export default class PreInitArray {
from :LocItem;
to :LocItem;
timeFrom :number;
timeTo :number;
constructor(timeFrom:number,timeTo :number,from :LocItem,to :LocItem){
    this.from = from  ;
    this.to = to  ;
    this.timeFrom = timeFrom  ;
    this.timeTo = timeTo  ;
}

}
