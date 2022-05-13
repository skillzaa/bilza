import { Pack } from "../../../Bilza.js";
import Component from "../../BaseComponent/component.js";
import { ObjectData } from "./DataFn.js";
export default class LinesShape extends Component<ObjectData> {
    private vertices;
    private moveTo;
    constructor(x?: number, y?: number);
    draw(p: Pack): boolean;
    add(x?: number, y?: number): void;
}
//# sourceMappingURL=linesShape.d.ts.map