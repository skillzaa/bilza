import { Pack, BaseComponent } from "../Bilza.js";
export default class FrameCounter extends BaseComponent {
    private content;
    color: string;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=counter.d.ts.map