import AniNumberDb from "../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniColorDb from "../animationsFacade/aniColorDb/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/aniBooleanDb/AniBooleanDb.js";
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
    startTime: number;
    endTime: number;
    insertAction: "add" | "append" | "alwaysOn";
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn");
}
//# sourceMappingURL=corePropsDb.d.ts.map