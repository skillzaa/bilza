import { DrawLayer } from "../bilza.js";
import Style from "../design/style.js";
export default class BaseComponentBase {
    readonly id: string;
    usePercentages: boolean;
    drawLayer: DrawLayer;
    style: Style;
    duration: number;
    protected insertTimeInVid: number;
    alwaysOn: boolean;
    colorBoundingRectangle: string;
    version: string;
    canvasWidth: number | null;
    canvasHeight: number | null;
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    visible: boolean;
    selected: boolean;
    constructor();
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
}
//# sourceMappingURL=BaseComponentBase.d.ts.map