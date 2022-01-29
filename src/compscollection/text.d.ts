import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import CtxData from "../design/ctxData.js";
export default class Text extends Component {
    content: string;
    ctxData: CtxData;
    constructor(content: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map