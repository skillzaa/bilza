import { Pack } from "../Bilza.js";
import Component from "../BaseComponent/Basecomponent.js";
export default class TestComp extends Component {
    msDelta: number;
    name: string;
    constructor(name: string);
    width(p: Pack): number;
    height(p: Pack): number;
    update(msDelta: number): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map