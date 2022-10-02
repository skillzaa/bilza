import Component from "../EngineComponent/component.js";
import Pack from "../pack/pack.js";
import ComponentPack from "../componentPack/componentPack.js";
import { AniNumber } from "../animations/animations.js";
export default class CanvasBorder extends Component {
    borderWidth: AniNumber;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, color?: string, borderWidth?: number);
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=canvasBorder.d.ts.map