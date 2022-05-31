import LocItem from "./locItem.js";

export default class GotoArray {
gotoLocItem :LocItem;
atFrame :number;
constructor(atFrame:number,gotoLocItem :LocItem){
    this.gotoLocItem = gotoLocItem  ;
    this.atFrame = atFrame  ;
}

}
