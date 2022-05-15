import { Pack } from "../../../Bilza.js";
import Component from "../../BaseComponent/Basecomponent.js";
import { ObjectData } from "./textData.js";
export default class Text extends Component<ObjectData> {
    constructor(duration?: number, content?: string, colorHax?: string, x?: number, y?: number, dynWidth?: number, dynHeight?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private drawBorder;
    private drawBg;
    private drawContent;
    private getX;
    private getY;
    dynamicFontSize(p: Pack): number | null;
    shrinkHeightToFit(p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map