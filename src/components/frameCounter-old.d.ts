import { Pack, BaseComponent } from "../Bilza.js";
import Text from "./text/text.js";
export default class FrameCounter extends BaseComponent {
    textComp: Text;
    constructor(color?: string, bgColor?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=frameCounter-old.d.ts.map