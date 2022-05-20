import { OffScreenXOpt } from "../../OffScreenXOpt.js";

export default class MoveXItem {
from :number;
to :number;
startValue :number | OffScreenXOpt ;
endValue :number | OffScreenXOpt ;
constructor(from :number=0, to :number=10, startValue :number | OffScreenXOpt,endValue :number | OffScreenXOpt){
    this.from = from  ;
    this.to = to  ;
    this.startValue = startValue  ;
    this.endValue = endValue  ;
}

}
