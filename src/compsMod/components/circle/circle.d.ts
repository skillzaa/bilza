import { Pack } from "../../../Bilza.js";
import Component from "../../../BaseComponent/Basecomponent.js";
import { ObjectData } from "./DataFn.js";
export default class Circle extends Component<ObjectData> {
    constructor(duration?: number, x?: number, y?: number, radiusPercent?: number, color?: string, fill?: boolean, startAngle?: number, endAngle?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map