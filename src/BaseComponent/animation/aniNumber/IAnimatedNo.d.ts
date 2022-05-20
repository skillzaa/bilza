import { Pack } from "../../../Bilza.js";
export default interface IAnimatedNo {
    init(p: Pack, startTime: number, endTime: number, duration: number, compWidth: number | null, compHeight: number | null): boolean;
    update(msDelta: number, p: Pack): boolean;
    value(): number | null;
}
//# sourceMappingURL=IAnimatedNo.d.ts.map