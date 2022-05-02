import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
export declare class ObjectData extends CompDataBase {
    padding: number;
    border: number;
    fontSize: number;
    dynWidth: number;
    dynHeight: number;
    content: string;
    color: string;
    colorBorder: string;
    colorBg: string;
    flagDrawContent: boolean;
    flagDrawBorder: boolean;
    flagDrawBg: boolean;
    flagTextShadow: boolean;
    flagBorderShadow: boolean;
    flagBgShadow: boolean;
    flagUseDynResize: boolean;
    flagShrinkHeightToFit: boolean;
    flagUseRelativeXY: boolean;
    maxDisplayChars: number;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
    constructor();
}
export default function DataFn(): ObjectData;
//# sourceMappingURL=textData.d.ts.map