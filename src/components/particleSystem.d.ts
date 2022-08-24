import { Pack, BaseComponent } from "../bilza.js";
import { AniNumber } from "../animationModule/animations.js";
import Circle from "./circle.js";
export default class ParticleSystem extends BaseComponent {
    private skipXFrames;
    private xyArray;
    quantity: AniNumber;
    particleSize: AniNumber;
    circle: Circle;
    constructor(quantity?: number, color?: string, framesToSkip?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=particleSystem.d.ts.map