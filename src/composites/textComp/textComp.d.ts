import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Rect from "../../components/rect/rect.js";
import Txt from "../../components/text/text.js";
export default class TextComp extends Component<ObjectData> {
    txt: Txt;
    rect: Rect;
    constructor(content?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=textComp.d.ts.map