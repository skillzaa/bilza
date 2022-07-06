import { Pack, BaseComponent } from "../bilza.js";
export default class BgCircles extends BaseComponent {
    count: number;
    size: number;
    delay: number;
    private delayCounter;
    color: string;
    constructor(count?: number, color?: string, delay?: number);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=bgCircles.d.ts.map