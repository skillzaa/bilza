import Pack from "../pack/pack.js";
import Component from "../component/component.js";
export default class Text extends Component {
    content: string;
    fontSize: number;
    constructor(content: string, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map