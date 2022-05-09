import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.color = "#000000";
        this.widthPercent = 10;
        this.heightPercent = 10;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
