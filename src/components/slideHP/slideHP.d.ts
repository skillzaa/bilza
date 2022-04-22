import { Component, Pack } from "../../Bilza.js";
import { ObjectData } from "./DataFn.js";
import Text from "../text/text.js";
import Para from "../para/para.js";
export default class SlideHP extends Component<ObjectData> {
    hdg: Text;
    para: Para;
    constructor(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, color?: string);
    setPara(): void;
    setHdg(color: string): void;
    addLine(content: string): void;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=slideHP.d.ts.map