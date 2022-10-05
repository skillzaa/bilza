import CompDb from "../../compDb/compDb.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";
import AniBooleanDb from "../../animationsFacade/aniBooleanDb/AniBooleanDb.js";
import Grid from "./grid.js";
export default class GridDb extends CompDb {
    constructor(startTime, endTime, insertAction, color = "grey", cellWidth = 10, cellHeight = 10) {
        super(startTime, endTime, insertAction);
        this.lineDash = [];
        this.lineDash = [];
        this.cellWidth = new AniNumberDb(cellWidth);
        this.cellHeight = new AniNumberDb(cellHeight);
        this.showHorizontalLines = new AniBooleanDb(true);
        this.showVerticalLines = new AniBooleanDb(true);
        this.lineWidthVertical = new AniNumberDb(1);
        this.lineWidthHorizontal = new AniNumberDb(1);
        this.colorHorizontalLines = new AniColorDb(color);
        this.colorVerticalLines = new AniColorDb(color);
        this.colorNumbers = new AniColorDb("black");
        this.showNumbers = new AniBooleanDb(false);
        this.fontSize = new AniNumberDb(40);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new Grid(this, pack);
        return comp;
    }
}
