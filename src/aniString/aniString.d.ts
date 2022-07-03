export default class AniString {
    private _value;
    private filters;
    constructor(defaultValue?: string);
    update(msDelta: number): boolean;
    value(): string;
    set(n: string): string;
    goto(startTimeSec: number, theValue?: number): void;
    private runFilters;
}
//# sourceMappingURL=aniString.d.ts.map