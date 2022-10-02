import AniNumberDb from "../../animations/propTypesDb/AniNumberDb.js";
import AniColorDb from "../../animations/propTypesDb/AniColorDb.js";
import AniBooleanDb from "../../animations/propTypesDb/AniBooleanDb.js";
export default class CoreProps {
    readonly id: string;
    border: AniNumberDb;
    colorBackground: AniColorDb;
    colorBorder: AniColorDb;
    color: AniColorDb;
    drawLayer: 0 | 1 | 2 | 3 | 4;
    selected: boolean;
    height: AniNumberDb;
    rotation: AniNumberDb;
    opacity: AniNumberDb;
    paddingTop: AniNumberDb;
    paddingBottom: AniNumberDb;
    paddingRight: AniNumberDb;
    paddingLeft: AniNumberDb;
    showBackground: AniBooleanDb;
    visible: AniBooleanDb;
    version: string;
    width: AniNumberDb;
    x: AniNumberDb;
    y: AniNumberDb;
    compType: string;
    constructor();
}
//# sourceMappingURL=coreProps.d.ts.map