import AniProp from "../aniProp/aniProp.js";
import { AniPercDb } from "../../animations/animations.js";
export default class AniPerc extends AniProp<number> {
    private theWhole;
    constructor(aniPercDb: AniPercDb);
    value(): number;
    valuePerc(): number;
    private responsiveValue;
}
//# sourceMappingURL=aniPerc.d.ts.map