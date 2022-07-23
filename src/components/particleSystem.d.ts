import { Pack, BaseComponent, AniNumber } from "../bilza.js";
import Circle from "./circle.js";
export default class ParticleSystem extends BaseComponent {
    private skipXFrames;
    private xyArray;
    count: AniNumber;
    particleSize: AniNumber;
    circle: Circle;
    constructor(count?: number, color?: string, framesToSkip?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=particleSystem.d.ts.map