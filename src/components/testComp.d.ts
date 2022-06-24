import { Pack, BaseComponent, AnimatedNoBase } from "../bilza.js";
import AniNumber from "../aniNumber/aniNumber.js";
export default class TestComp extends BaseComponent {
    local_x: AniNumber;
    local_y: AniNumber;
    color: string;
    dynWidth: AnimatedNoBase;
    dynHeight: AnimatedNoBase;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map