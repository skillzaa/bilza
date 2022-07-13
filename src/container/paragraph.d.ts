import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Row from "./row.js";
import Text from "../components/text.js";
import { AniNumber, AniBoolean, AniColor } from "../bilza.js";
export default class Paragraph extends BaseComponent {
    private rowArray;
    private y_internal;
    rowGap: AniNumber;
    border: AniNumber;
    padding: AniNumber;
    fontSize: AniNumber;
    opacityBackground: AniNumber;
    showBackground: AniBoolean;
    uniformFontSize: AniBoolean;
    colorBackground: AniColor;
    colorBorder: AniColor;
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    private setFontSize;
    getCell(row: number, column: number): Text;
    getRow(row: number): Row;
    draw(p: Pack): boolean;
    drawBackground(p: Pack): void;
    drawBorder(p: Pack): void;
    addRow(txt?: string): void;
}
//# sourceMappingURL=paragraph.d.ts.map