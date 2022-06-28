import TimeObj from "./90TimeObj.js";
export default class Shadow extends TimeObj {
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    constructor();
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
}
//# sourceMappingURL=Shadow.d.ts.map