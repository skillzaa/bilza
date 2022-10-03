import Component from "../../engineComponent/engineComponent.js";
import ComponentDb from "../../componentFacade/componentDb.js";
import ComponentPack from "../../componentPack/componentPack.js";
export default class FillRectDb extends ComponentDb {
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn");
    getEngineComponent(componentPack: ComponentPack): Component;
}
//# sourceMappingURL=fillRectDb.d.ts.map