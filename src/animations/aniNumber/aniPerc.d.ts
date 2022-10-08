import AniProp from "../aniProp/aniProp.js";
import { AniPercDb } from "../../animationsFacade/animationsDb.js";
export default class AniPerc extends AniProp<number> {
    private theWhole;
    constructor(aniPercDb: AniPercDb);
    value(): number;
    valuePerc(): number;
    private responsiveValue;
}
//# sourceMappingURL=aniPerc.d.ts.map