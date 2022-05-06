import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.prefix = "sec: ";
        this.frame = 0;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
