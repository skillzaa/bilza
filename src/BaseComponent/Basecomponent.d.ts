import { Pack, IComponent, DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import BaseProps from "./BaseProps.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
export default class BaseComponent implements IComponent {
    props: BaseProps;
    p: BaseProps;
    readonly id: string;
    drawLayer: DrawLayer;
    style: Style;
    duration: number;
    readonly offScreenXOpt: typeof OffScreenXOpt;
    readonly offScreenYOpt: typeof OffScreenYOpt;
    private insertTimeInVid;
    alwaysOn: boolean;
    constructor();
    width(): number;
    height(): number;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
    resize(width: number, height: number): number;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
}
//# sourceMappingURL=BaseComponent.d.ts.map