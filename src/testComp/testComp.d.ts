import { Pack } from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
import AniNumber from "../animation/aniNumber/aniNumber.js";
export default class TestComp extends Component {
    xx: AniNumber;
    msDelta: number;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map