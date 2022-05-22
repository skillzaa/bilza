import { Pack } from "../Bilza.js";
import Component from "../BaseComponent/BaseComponent.js";
export default class TestComp extends Component {
    msDelta: number;
    name: string;
    constructor(name: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=testComp.d.ts.map