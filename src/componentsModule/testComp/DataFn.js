import CompDataBase from "../BaseComponent/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.msDelta = 0;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
