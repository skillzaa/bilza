export default class XyBaseAdaptor {
    private preInitGotos;
    private preInitAnimates;
    private preInitVibrates;
    private _XorY;
    constructor();
    update(msDelta: number): void;
    value(): number;
    vibrate(from: number, to: number, xValue: number, offset: number, delay: number): void;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): void;
}
//# sourceMappingURL=xyBaseAdapter.d.ts.map