import { Pack, BaseComponent } from "../bilza.js";
export default class BgCircles extends BaseComponent {
    private skipXFrames;
    private xyArray;
    count: number;
    size: number;
    color: string;
    constructor(count?: number, color?: string, framesToSkip?: number);
    init(p: Pack): boolean;
    draw(p: Pack): boolean;
    private getRandomXY;
}
//# sourceMappingURL=bgCircles.d.ts.map