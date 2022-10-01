import Pack from "../pack/pack.js";
import Text from "./text/text.js";
import { AniBoolean } from "../animations/animations.js";
export default class FrameCounter extends Text {
    convertToSec: AniBoolean;
    constructor(startTime: number, endTime: number, Hue_0_to_360?: number);
    update(msDelta: number, p: Pack): boolean;
}
//# sourceMappingURL=frameCounter.d.ts.map