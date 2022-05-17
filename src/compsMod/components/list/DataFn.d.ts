import CompDataBase from "../../../BaseComponent/CompDataBase.js";
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
    showBg: boolean;
    flagShrinkTofitVertically: boolean;
    paddingX: number;
    paddingY: number;
    dynWidth: number;
    items: Text[];
    dimList: number[];
    dimFontColor: string;
    dimBgColor: string;
    dimBorderColor: string;
    highlightList: number[];
    highlightFontColor: string;
    highlightBgColor: string;
    highlightBorderColor: string;
    constructor();
}
export default function DataFn(): ObjectData;
//# sourceMappingURL=DataFn.d.ts.map