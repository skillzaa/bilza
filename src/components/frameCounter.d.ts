import { Pack } from "../bilza.js";
import RawText from "./text.js";
export default class FrameCounter extends RawText {
    convertToSec: boolean;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
}
//# sourceMappingURL=frameCounter.d.ts.map