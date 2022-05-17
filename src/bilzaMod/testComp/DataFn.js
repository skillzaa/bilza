import CompDataBase from "../../BaseComponent/CompDataBase.js";
import Adder from "../../propFilters/numberFilters/adder.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.xx = new Adder(2);
        this.msDelta = 0;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
