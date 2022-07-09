import Pack from "../pack/pack.js";
import { IComponent } from "../bilza.js";
export default class SystemBackground implements IComponent {
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=systemBackground.d.ts.map