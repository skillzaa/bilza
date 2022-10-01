import Pack from "../../pack/pack.js";
import Component from "../../component/component.js";
import { AniNumber, AniBoolean, AniColor } from "../../animations/animations.js";
import Templ from "./templ.js";
import Theme from "./theme.js";
export default class Arrow extends Component {
    x2: AniNumber;
    y2: AniNumber;
    headWidth: AniNumber;
    headHeight: AniNumber;
    headFilled: AniBoolean;
    colorHead: AniColor;
    lineWidth: AniNumber;
    templ: Templ;
    theme: Theme;
    constructor(startTime: number, endTime: number, x1?: number, y1?: number, x2?: number, y2?: number, color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
    align(x?: number | null, y?: number | null): void;
    alignRotate(x?: number | null, y?: number | null): void;
    pointTo(second: number, x: number, y: number): void;
}
//# sourceMappingURL=arrow.d.ts.map