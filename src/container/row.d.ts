import { Pack } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import RawText from "../components/text/text.js";
export default class Row extends BaseComponent {
    textArray: RawText[];
    private incommingTextArray;
    private x_local;
    constructor(incommingTextArray?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    contentWidth(): number;
    contentHeight(): number;
    setFontSize(fontSize: number): void;
    setFontColor(fontColor: string): void;
    getCell(column: number): RawText;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=row.d.ts.map