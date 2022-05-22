import { Pack } from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
import AnimatedNoBase from "../BaseComponent/animation/aniNumber/AnimatedNoBase.js";
export default class TestComp extends Component {
    msDelta: number;
    xx: AnimatedNoBase;
    yy: AnimatedNoBase;
    name: string;
    constructor(name: string);
    init(p: Pack): boolean;
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map