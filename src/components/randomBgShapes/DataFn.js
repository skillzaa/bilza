export class ObjectData {
    constructor() {
        this.frameStart = 0;
        this.count = 200;
    }
}
;
export default function DataFn() {
    let td = new ObjectData();
    return td;
}
