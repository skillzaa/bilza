import { Pack } from "../../../Bilza.js";
import Component from "../../../BaseComponent/Basecomponent.js";
import { ObjectData } from "./DataFn.js";
export default class Background extends Component<ObjectData> {
    constructor(color?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=background.d.ts.map