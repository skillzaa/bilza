import CompDataBase from "../../BaseComponent/CompDataBase.js";
import PlusX from "../../propObjs/plusX.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.xx = new PlusX(1);
        this.msDelta = 0;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
