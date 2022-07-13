import { Pack, AniNumber, AniColor } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Text from "../components/text.js";
export default class Row extends BaseComponent {
    textArray: Text[];
    incommingTextArray: string[];
    x_internal: number;
    colorBackground: AniColor;
    paddingTop: AniNumber;
    paddingBottom: AniNumber;
    paddingRight: AniNumber;
    paddingLeft: AniNumber;
    constructor(incommingTextArray?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    setFontSize(fontSize: number): void;
    setFontColor(fontColor: string): void;
    getCell(column: number): Text;
    draw(p: Pack): boolean;
    drawBackground(p: Pack): void;
}
//# sourceMappingURL=row.d.ts.map