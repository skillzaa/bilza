import { Pack } from "../../../Bilza.js";
import Style from "../../../design/style.js";
import { ObjectData } from "./DataFn.js";
export default class DrawUtil {
    d: ObjectData;
    constructor(d: ObjectData);
    drawBg(p: Pack, width: number, height: number, style: Style): void;
    drawBorder(p: Pack, width: number, height: number, style: Style): void;
}
//# sourceMappingURL=drawUtil.d.ts.map