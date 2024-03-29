import { AniNumberDb, AniPercDb, AniBooleanDb, AniColorDb } from "../animations/animations.js";
import Linker from "../facade/linker.js";
export default class CorePropsDb {
    readonly id: string;
    border: AniNumberDb;
    colorBackground: AniColorDb;
    colorBorder: AniColorDb;
    color: AniColorDb;
    drawLayer: 0 | 1 | 2 | 3 | 4;
    selected: boolean;
    height: AniPercDb;
    rotation: AniNumberDb;
    opacity: AniNumberDb;
    paddingTop: AniPercDb;
    paddingBottom: AniPercDb;
    paddingRight: AniPercDb;
    paddingLeft: AniPercDb;
    showBackground: AniBooleanDb;
    visible: AniBooleanDb;
    version: string;
    width: AniPercDb;
    x: AniPercDb;
    y: AniPercDb;
    alwaysOn: boolean;
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    private _canvasWidth;
    private _canvasHeight;
    startTime: number;
    endTime: number;
    readonly insertAction: "add" | "append" | "alwaysOn";
    constructor(linker: Linker);
    canvasWidth(): number;
    canvasHeight(): number;
}
//# sourceMappingURL=corePropsDb.d.ts.map