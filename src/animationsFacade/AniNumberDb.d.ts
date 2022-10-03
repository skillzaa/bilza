import AniPropDb from "./AniPropDb.js";
export default class AniNumberDb extends AniPropDb<number> {
    private _isResp;
    private theWhole;
    constructor(initialValue: number);
    private init;
    private setResp;
    isResponsive(): boolean;
    value(): number;
    valueRaw(): number;
    private responsiveValue;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number): void;
}
//# sourceMappingURL=AniNumberDb.d.ts.map