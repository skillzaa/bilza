import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.fontSize = 30;
        this.content = "sec: ";
        this.frame = 0;
        this.padding = 4;
        this.colorRectangle = "black";
        this.colorNumbers = "yellow";
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
