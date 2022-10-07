import IComponent from "../../compDb/IComponent.js";
import { AniNumberDb, AniStringDb, AniBooleanDb } from "../../animationsFacade/animationsDb.js";
import { FontFamily } from "../../pack/fontFamily.js";
export default interface IRect extends IComponent {
    content: AniStringDb;
    fontFamily: FontFamily;
    fontSize: AniNumberDb;
    maxDisplayChars: AniNumberDb;
    fitToWidth: AniBooleanDb;
    fitToHeight: AniBooleanDb;
    respFontSize: AniBooleanDb;
}
//# sourceMappingURL=IText.d.ts.map