import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export class ImageData extends CompDataBase {
    constructor() {
        super();
        this.msStart = 0;
        this.x = 0;
        this.y = 0;
        this.dynWidthPercent = 30;
        this.dynHeightPercent = 50;
        this.useDynResize = false;
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
    }
}
;
export default function DataFn() {
    let td = new ImageData();
    return td;
}
