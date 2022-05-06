import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export declare class ObjectData extends CompDataBase {
    content: string;
    padding: number;
    border: number;
    maxDisplayChars: number;
    fontSize: number;
    dynWidth: number;
    dynHeight: number;
    flagUseDynResize: boolean;
    flagShrinkHeightToFit: boolean;
    flagUseRelativeXY: boolean;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    constructor();
}
export default function DataFn(): ObjectData;
//# sourceMappingURL=textData.d.ts.map