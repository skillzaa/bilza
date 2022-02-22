export class TextLineData {
    constructor() {
        this.frameStart = 0;
        this.x = 0;
        this.y = 0;
        this.content = "some text";
    }
}
;
export default function DataFn() {
    let td = new TextLineData();
    return td;
}
