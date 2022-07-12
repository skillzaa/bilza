import Pack from "../pack/pack.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Row from "./row.js";
import Text from "../components/text.js";
export default class Paragraph extends BaseComponent {
    rowArray: Row[];
    y_internal: number;
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    getCell(row: number, column: number): Text;
    draw(p: Pack): boolean;
    addRow(txt?: string): void;
}
//# sourceMappingURL=table.d.ts.map