import { Pack, BaseComponent } from "../bilza.js";
import Circle from "./circle.js";
export default class CircleParticles extends BaseComponent {
    private skipXFrames;
    private xyArray;
    count: number;
    circle: Circle;
    constructor(count?: number, color?: string, framesToSkip?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=circleParticles.d.ts.map