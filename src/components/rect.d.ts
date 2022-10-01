import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import { AniNumber } from "../animations/animations.js";
export default class Rect extends Component {
    lineWidth: AniNumber;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, color?: string);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map