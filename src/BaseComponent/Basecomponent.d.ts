import { Pack, IComponent, DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import Props from "./BaseProps.js";
import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export default class Component implements IComponent {
    props: Props;
    p: Props;
    readonly id: string;
    drawLayer: DrawLayer;
    style: Style;
    readonly xAlignmentOptions: typeof XAlignment;
    readonly yAlignmentOptions: typeof YAlignment;
    duration: number;
    private insertTimeInVid;
    alwaysOn: boolean;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
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
}
//# sourceMappingURL=Basecomponent.d.ts.map