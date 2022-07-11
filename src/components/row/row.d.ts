import Pack from "../../pack/pack.js";
import BaseComponent from "../../BaseComponent/00BaseComponent.js";
import Text from "../text.js";
export default class Row extends BaseComponent {
    textArray: Text[];
    incommingTextArray: string[];
    x_internal: number;
    constructor(incommingTextArray?: string[]);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    getCell(column: number): Text;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=row.d.ts.map