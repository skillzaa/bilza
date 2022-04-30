import { Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
export default class ListUtil {
    d: ObjectData;
    constructor(d: ObjectData);
    initAllItems(p: Pack): void;
    getSmallestFontSize(p: Pack): number;
    assignFontSizeToAll(incomFontSize: number): void;
    applyDim(p: Pack): void;
    applyHighlight(p: Pack): void;
}
//# sourceMappingURL=listUtil.d.ts.map