import { OffScreenXOpt } from "../../OffScreenXOpt.js";

export default class PreInitMoves {
from :number;
to :number;
startValue :number;
endValue :number;
constructor(from :number=0, to :number=10, startValue :number,endValue :number){
    this.from = from  ;
    this.to = to  ;
    this.startValue = startValue  ;
    this.endValue = endValue  ;
}

}
