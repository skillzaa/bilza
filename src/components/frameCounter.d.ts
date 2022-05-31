import { Pack, BaseComponent } from "../Bilza.js";
export default class FrameCounter extends BaseComponent {
    private content;
    color: string;
    bgColor: string;
    constructor(color?: string, bgColor?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=frameCounter.d.ts.map