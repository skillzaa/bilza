import IComponent from "../../compDb/IComponent.js";
import { AniNumberDb, AniStringDb, AniBooleanDb } from "../../animations/animations.js";
import { FontFamily } from "../../pack/fontFamily.js";
export default interface IRect extends IComponent {
    content: AniStringDb;
    fontFamily: FontFamily;
    maxDisplayChars: AniNumberDb;
    fitToWidth: AniBooleanDb;
}
//# sourceMappingURL=IText.d.ts.map