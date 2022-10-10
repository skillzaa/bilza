import IComponent from "../../compDb/IComponent.js";
import { AniNumberDb, AniColorDb, AniBooleanDb } from "../../animations/animations.js";
export default interface IGrid extends IComponent {
    lineDash: number[];
    cellWidth: AniNumberDb;
    cellHeight: AniNumberDb;
    showHorizontalLines: AniBooleanDb;
    showVerticalLines: AniBooleanDb;
    lineWidthVertical: AniNumberDb;
    lineWidthHorizontal: AniNumberDb;
    colorHorizontalLines: AniColorDb;
    colorVerticalLines: AniColorDb;
    colorNumbers: AniColorDb;
    showNumbers: AniBooleanDb;
    fontSize: AniNumberDb;
}
//# sourceMappingURL=IGrid.d.ts.map