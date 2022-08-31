import { Scene } from "../bilza.js";
import Grid from "../components/grid.js";
import Text from "../components/text.js";
export default class Slide extends Scene {
    constructor(startTime: number, endTime: number);
    addGrid(hslValue?: string): Grid;
    addH1(content: string, Hue_0_to_360?: number): Text;
}
//# sourceMappingURL=slide.d.ts.map