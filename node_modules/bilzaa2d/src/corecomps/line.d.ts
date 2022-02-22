import Pack from "../bilzaa2d/pack/pack.js";
import Component from "../bilzaa2d/baseComp.js";
import Style from "../bilzaa2d/style/style.js";
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