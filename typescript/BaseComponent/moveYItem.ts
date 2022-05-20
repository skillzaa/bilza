import { OffScreenYOpt } from "./OffScreenYOpt.js";

export default class MoveYItem {
from :number;
to :number;
startValue :number |  OffScreenYOpt ;
endValue :number |  OffScreenYOpt;
constructor(from :number=0, to :number=10, startValue :number | OffScreenYOpt,endValue :number  | OffScreenYOpt){
    this.from = from  ;
    this.to = to  ;
    this.startValue = startValue  ;
    this.endValue = endValue  ;
}

}
