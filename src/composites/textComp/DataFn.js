import CompDataBase from "../../design/CompDataBase.js";
export class ObjectData extends CompDataBase {
    constructor() {
        super();
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}