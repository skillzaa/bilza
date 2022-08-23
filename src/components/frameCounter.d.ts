import { Pack } from "../bilza.js";
import Text from "./text-dynamicFontSize.js";
import { AniBoolean } from "../animationModule/animations.js";
export default class FrameCounter extends Text {
    convertToSec: AniBoolean;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
}
//# sourceMappingURL=frameCounter.d.ts.map