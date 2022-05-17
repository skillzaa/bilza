import CompDataBase from "../../../BaseComponent/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.lineWidth = 5;
        this.flagFilled = true;
        this.color = "red";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
