import CompDataBase from "../../../BaseComponent/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 800;
        this.y2 = 100;
        this.lineWidth = 2;
        this.color = "red";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
