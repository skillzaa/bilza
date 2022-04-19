import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
export default class SlideHnL extends Component<ObjectData> {
    hdg: Text;
    lis: Text[];
    private dimSeqArray;
    private unDimSeqArray;
    private tt;
    constructor(contentHdg?: string);
    unDimSeq(itemIndex: number, TPlusSec: number): void;
    dimSeq(itemIndex: number, TPlusSec: number): void;
    protected applyUnDimSeq(msDelta: number): void;
    protected applyDimSeq(msDelta: number): void;
    getLocalMsDelta(msDeltaGlobal: number): number;
    addItem(content: string): Text;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    drawLis(p: Pack): void;
}
//# sourceMappingURL=slideHL.d.ts.map