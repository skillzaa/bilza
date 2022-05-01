import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
import List from "../list/list.js";
export default class SlideHL extends Component<ObjectData> {
    hdg: Text;
    list: List;
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string);
    init(p: Pack): boolean;
    addItem(content: string, startDim?: boolean, unDimSecond?: number): void;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getList;
    private getHdg;
}
//# sourceMappingURL=slideHL.d.ts.map