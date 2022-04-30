import CompDataBase from "../../design/CompDataBase.js";
import Text from "../text/text.js";
export declare class ObjectData extends CompDataBase {
    msStart: number;
    x: number;
    y: number;
    align: string;
    gap: number;
    widthBorder: number;
    colorBg: string;
    colorFont: string;
    colorBorder: string;
    colorItemBorder: string;
    flagShowBorder: boolean;
    flagShowBg: boolean;
    flagShrinkTofitVertically: boolean;
    paddingX: number;
    paddingY: number;
    dynWidth: number;
    items: Text[];
    constructor();
}
export default function DataFn(): ObjectData;
//# sourceMappingURL=DataFn.d.ts.map