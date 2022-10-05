import AniNumberDb from "../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniColorDb from "../animationsFacade/aniColorDb/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/aniBooleanDb/AniBooleanDb.js";
export default interface IComponent {
    border: AniNumberDb;
    colorBackground: AniColorDb;
    colorBorder: AniColorDb;
    color: AniColorDb;
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
    drawLayer: 0 | 1 | 2 | 3 | 4;
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    id: string;
    startTime: number;
    endTime: number;
    insertAction: string;
    alwaysOn: boolean;
}
//# sourceMappingURL=IComponentCore.d.ts.map