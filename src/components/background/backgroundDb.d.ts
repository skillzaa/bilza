import AniColorDb from "../../animationsFacade/AniColorDb.js";
import ComponentDb from "../../compDb/compDb.js";
import EngineComponent from "../../compEngine/compEngine.js";
export default class BackgroundDb extends ComponentDb {
    color: AniColorDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", color?: string);
    getEngineComponent(): EngineComponent;
}
//# sourceMappingURL=backgroundDb.d.ts.map