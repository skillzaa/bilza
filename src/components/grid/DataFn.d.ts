import CompDataBase from "../../design/CompDataBase.js";
export default function DataFn(): ObjectData;
export declare class ObjectData extends CompDataBase {
    msStart: number;
    cellWidth: number;
    cellHeight: number;
    colorHorizontalLines: string;
    colorVerticalLines: string;
    colorNumbers: string;
    flagDrawNumbers: boolean;
    flagDrawHorizontal: boolean;
    flagDrawVertical: boolean;
    lineWidthVertical: number;
    lineWidthHorizontal: number;
    fontSize: number;
    lineDash: number[];
    constructor();
}
//# sourceMappingURL=DataFn.d.ts.map