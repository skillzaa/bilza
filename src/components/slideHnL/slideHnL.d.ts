import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
export default class SlideHnL extends Component<ObjectData> {
    hdg: Text;
    lis: Text[];
    private tt;
    constructor(contentHdg?: string);
    addItem(content: string): void;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    drawLis(p: Pack): void;
}
//# sourceMappingURL=slideHnL.d.ts.map