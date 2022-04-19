import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.listStartY = 30;
        this.listGapFactor = 10;
        this.applyWdHtPerc = false;
        this.maxLiChars = 50;
        this.flagStartDim = true;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
