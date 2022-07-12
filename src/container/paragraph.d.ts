import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Text from "../components/text.js";
import { AniNumber } from "../bilza.js";
export default class Paragraph extends BaseComponent {
    private rowArray;
    private y_internal;
    rowGap: AniNumber;
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    getCell(row: number, column: number): Text;
    draw(p: Pack): boolean;
    addRow(txt?: string): void;
}
//# sourceMappingURL=paragraph.d.ts.map