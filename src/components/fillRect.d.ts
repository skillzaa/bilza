import { Pack, BaseComponent } from "../bilza.js";
export default class FillRect extends BaseComponent {
    color: string;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map