import { Pack, BaseComponent } from "../Bilza.js";
import AniNumber from "../ animations/aniNumber/aniNumber.js";
export default class TestComp extends BaseComponent {
    color: string;
    dynWidth: AniNumber;
    dynHeight: AniNumber;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map