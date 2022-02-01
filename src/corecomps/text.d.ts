import Pack from "../pack/pack.js";
import Component from "../component/component.js";
export default class Text extends Component {
    content: string;
    constructor(content: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map