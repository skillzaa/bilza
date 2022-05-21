import { Pack, IComponent, DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import { YAlignment } from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { OffScreenYOpt } from "./OffScreenYOpt.js";
export default class BaseComponent implements IComponent {
    props: BaseProps;
    p: BaseProps;
    readonly id: string;
    drawLayer: DrawLayer;
    style: Style;
    duration: number;
    readonly offScreenXOpt: typeof OffScreenXOpt;
    readonly offScreenYOpt: typeof OffScreenYOpt;
    readonly yAlignmentOptions: typeof YAlignment;
    private moveYArray;
    private insertTimeInVid;
    alwaysOn: boolean;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    initProps(p: Pack): void;
    draw(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
    resize(width: number, height: number): number;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    moveX(from?: number, to?: number, startValue?: number | OffScreenXOpt, endValue?: number | OffScreenXOpt): void;
}
//# sourceMappingURL=Basecomponent.d.ts.map