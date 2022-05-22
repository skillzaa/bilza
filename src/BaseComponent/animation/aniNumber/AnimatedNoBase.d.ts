export default class AnimatedNoBase {
    private _ret_value;
    private _set_value;
    private preInitIncDecArray;
    private animations;
    protected compWidth: null | (() => number);
    protected compHeight: null | (() => number);
    protected canvasWidth: number | null;
    protected canvasHeight: number | null;
    constructor(defaultValue?: number);
    init(compWidth: () => number, compHeight: () => number, canvasWidth: number, canvasHeight: number): boolean;
    update(msDelta: number): boolean;
    value(): number;
    setValue(n: number): number;
    animate(from?: number, to?: number, startValue?: number, endValue?: number): void;
    private initIncDec;
    private runSetValue;
    private runAnimations;
    protected notInitError(): void;
    protected checkNonNull(n: null | number): number;
    protected xPercToPix(perc: number): number;
    protected yPercToPix(perc: number): number;
}
//# sourceMappingURL=AnimatedNoBase.d.ts.map