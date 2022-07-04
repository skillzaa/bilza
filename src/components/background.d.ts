import { Pack, BaseComponent } from "../bilza.js";
import AniColor from "../animations/aniColor/aniColor.js";
export default class Background extends BaseComponent {
    color: AniColor;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=background.d.ts.map