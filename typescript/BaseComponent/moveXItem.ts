import { OffScreenOptions } from "./OffScreenOptions.js";

export default class MoveXItem {
from :number;
to :number;
startValue :number | OffScreenOptions;
endValue :number | OffScreenOptions;
constructor(from :number=0,to :number=10,startValue :number | OffScreenOptions,endValue :number | OffScreenOptions){
    this.from = from  ;
    this.to = to  ;
    this.startValue = startValue  ;
    this.endValue = endValue  ;
}

}
