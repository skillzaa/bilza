import { Pack, IComponent, DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
import { OffScreenOptions } from "./OffScreenOptions.js";
export default class BaseComponent implements IComponent {
    props: BaseProps;
    p: BaseProps;
    useRelativeXY: boolean;
    readonly id: string;
    drawLayer: DrawLayer;
    style: Style;
    duration: number;
    readonly offScreenOptions: typeof OffScreenOptions;
    readonly xAlignmentOptions: typeof XAlignment;
    readonly yAlignmentOptions: typeof YAlignment;
    private moveXArray;
    private moveYArray;
    private insertTimeInVid;
    alwaysOn: boolean;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    initProps(p: Pack): void;
    private initMoveXArrayNONuseRelativeXY;
    private initMoveYArrayNONuseRelativeXY;
    private initMoveXArray;
    private initMoveYArray;
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
    moveX(from?: number, to?: number, startValue?: number | OffScreenOptions, endValue?: number | OffScreenOptions): void;
    moveY(from?: number, to?: number, startValue?: number | OffScreenOptions, endValue?: number | OffScreenOptions): void;
    move(from?: number, to?: number, startX?: number, endX?: number, startY?: number, endY?: number, offScreenX?: boolean, offScreenY?: boolean): void;
}
//# sourceMappingURL=Basecomponent.d.ts.map