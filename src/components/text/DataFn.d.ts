import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export declare class ObjectData extends CompDataBase {
    widthPercent: number;
    heightPercent: number;
    padding: number;
    margin: number;
    border: number;
    content: string;
    color: string;
    colorBorder: string;
    colorBg: string;
    flagDrawContent: boolean;
    flagDrawBorder: boolean;
    flagTextShadow: boolean;
    flagBgShadow: boolean;
    flagDrawBg: boolean;
    autoScaleFontSize: boolean;
    maxDisplayChars: number;
    xAlignment: XAlignment;
    yAlignment: YAlignment;
    constructor();
}
export default function DataFn(): ObjectData;
//# sourceMappingURL=DataFn.d.ts.map