import CompDataBase from "../../compsMod/BaseComponent/CompDataBase.js";
import PlusX from "../../propFilters/numberFilters/plusX.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.xx = new PlusX(2);
        this.msDelta = 0;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
