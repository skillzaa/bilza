import CompDataBase from "../../../BaseComponent/BaseProps.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
        this.count = 200;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}