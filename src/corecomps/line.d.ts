import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Style from "../style/style.js";
export default class Line extends Component {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    constructor(startX: number, startY: number, endX: number, endY: number, incomTempl: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map