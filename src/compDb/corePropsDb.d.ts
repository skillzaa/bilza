import AniNumberDb from "../animationsFacade/AniNumberDb.js";
import AniColorDb from "../animationsFacade/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/AniBooleanDb.js";
export default class CorePropsDb {
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
    alwaysOn: boolean;
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    constructor();
}
//# sourceMappingURL=corePropsDb.d.ts.map