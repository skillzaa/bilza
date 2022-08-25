import Time from "./90Time.js";
export default class Shadow extends Time {
    shadowColor: string;
    shadowOffsetX: number;
    shadowOffsetY: number;
    shadowBlur: number;
    constructor();
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
}
//# sourceMappingURL=80Shadow.d.ts.map