import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
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