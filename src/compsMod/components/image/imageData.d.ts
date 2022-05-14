import CompDataBase from "../../BaseComponent/CompDataBase.js";
import { XAlignment } from "../../BaseComponent/xAlignment.js";
import { YAlignment } from "../../BaseComponent/yAlignment.js";
export declare class ImageData extends CompDataBase {
    xAlignment: XAlignment;
    yAlignment: YAlignment;
    dynWidthPercent: number;
    dynHeightPercent: number;
    useDynResize: boolean;
    constructor();
}
export default function DataFn(): ImageData;
//# sourceMappingURL=imageData.d.ts.map