import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class ParticleSystem extends Component {
    private skipXFrames;
    private xyArray;
    count: AniNumber;
    particleSize: AniNumber;
    lineWidth: AniNumber;
    filled: AniBoolean;
    lineColor: AniColor;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, count?: number, color?: string, delay?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=particleSystem.d.ts.map