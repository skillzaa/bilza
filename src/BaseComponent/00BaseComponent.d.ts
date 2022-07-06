import { IComponent, Pack } from "../bilza.js";
import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj implements IComponent {
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    removeOpacity(): void;
}
//# sourceMappingURL=00BaseComponent.d.ts.map