import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import ComponentPack from "../compiler/componentPack.js";
import { AniNumber } from "../animations/animations.js";
export default class Line extends Component {
    x2: AniNumber;
    y2: AniNumber;
    lineWidth: AniNumber;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
    align(x?: number | null, y?: number | null): void;
    alignRotate(x: 0 | 1 | 2 | null, y?: number | null): void;
}
//# sourceMappingURL=line.d.ts.map