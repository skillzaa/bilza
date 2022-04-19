import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 10;
        this.y = 10;
        this.widthPercent = 200;
        this.heightPercent = 50;
        this.color = "red";
        this.widthPercent = 10;
        this.heightPercent = 10;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
