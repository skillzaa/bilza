import { Pack, BaseComponent } from "../bilza.js";
import AniNumber from "../aniNumber/aniNumber.js";
export default class TestComp extends BaseComponent {
    color: string;
    dynWidth: AniNumber;
    dynHeight: AniNumber;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map