import AniColorDb from "../../animationsFacade/AniColorDb.js";
import ComponentPack from "../../componentPack/componentPack.js";
import ComponentDb from "../../componentFacade/componentDb.js";
import EngineComponent from "../../engineComponent/engineComponent.js";
export default class BackgroundDb extends ComponentDb {
    color: AniColorDb;
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", color?: string);
    getEngineComponent(componentPack: ComponentPack): EngineComponent;
}
//# sourceMappingURL=backgroundDb.d.ts.map