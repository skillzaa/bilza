import CompDataBase from "../../../BaseComponent/BaseProps.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.prefix = "sec: ";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}