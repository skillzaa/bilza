import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.listStartY = 30;
        this.listGapFactor = 10;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
