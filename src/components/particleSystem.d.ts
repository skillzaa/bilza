import Pack from "../pack/pack.js";
import Component from "../EngineComponent/component.js";
import ComponentPack from "../componentPack/componentPack.js";
import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class ParticleSystem extends Component {
    private skipXFrames;
    private xyArray;
    count: AniNumber;
    particleSize: AniNumber;
    lineWidth: AniNumber;
    filled: AniBoolean;
    lineColor: AniColor;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, count?: number, color?: string, delay?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=particleSystem.d.ts.map