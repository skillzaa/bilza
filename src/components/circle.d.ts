import Pack from "../pack/pack.js";
import Component from "../engineComponent/engineComponent.js";
import ComponentPack from "../componentPack/componentPack.js";
import { AniNumber, AniBoolean } from "../animations/animations.js";
export default class Circle extends Component {
    startAngle: AniNumber;
    endAngle: AniNumber;
    filled: AniBoolean;
    lineWidth: AniNumber;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, radius?: number, color?: string);
    contentHeight(): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map