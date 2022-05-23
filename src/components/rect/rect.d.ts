import { Pack } from "../../Bilza.js";
import BaseComponent from "../../BaseComponent/BaseComponent.js";
import AnimatedNoBase from "../../BaseComponent/animation/aniNumber/AnimatedNoBase.js";
export default class Rect extends BaseComponent {
    lineWidth: AnimatedNoBase;
    color: string;
    constructor();
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map