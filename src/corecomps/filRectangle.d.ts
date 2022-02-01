import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Templ from "../design/templ.js";
export default class FillRectangle extends Component {
    x: number;
    y: number;
    rectWidth: number;
    rectHeight: number;
    constructor(x: number, y: number, width: number, height: number, incomTempl: Templ);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=filRectangle.d.ts.map