import { IComponent, Pack } from "../Bilza.js";
import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj implements IComponent {
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
}
//# sourceMappingURL=00BaseComponent.d.ts.map