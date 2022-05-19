import { Pack } from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
export default class TestComp extends Component {
    msDelta: number;
    name: string;
    constructor(name: string);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    moveX(from?: number, to?: number, startValue?: number, endValue?: number): void;
}
//# sourceMappingURL=testComp.d.ts.map