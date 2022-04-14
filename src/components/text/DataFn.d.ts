import CompDataBase from "../../design/CompDataBase.js";
import { XAlignment } from "./xAlignment.js";
export declare class ObjectData extends CompDataBase {
    widthPercent: number;
    padding: number;
    margin: number;
    heightPercent: number;
    content: string;
    color: string;
    colorMargin: string;
    colorBg: string;
    flagDrawMargin: boolean;
    flagDrawBg: boolean;
    flagDim: boolean;
    xAlignment: XAlignment;
    constructor();
}
export default function DataFn(): ObjectData;
//# sourceMappingURL=DataFn.d.ts.map