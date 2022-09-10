import Scene from "../scene/scene.js";
import Grid from "../components/grid.js";
import Text from "../components/text.js";
export default class Slide extends Scene {
    readonly themeHue_0_to_360: number;
    constructor(startTime: number, endTime: number, themeHue_0_to_360?: number);
    addGrid(cellWidth?: number, cellHeight?: number, color?: string | null): Grid;
    addBltPt(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addH1(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addH2(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addH3(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addH4(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addH5(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addH6(content: string, entryTimePlus?: number, exitTimeMinus?: number, x?: number, y?: number, Hue_0_to_360?: number | null): Text;
    addCanvasBorder(color?: string | null, borderWidth?: number, entryTimePlus?: number, exitTimeMinus?: number): void;
}
//# sourceMappingURL=slide.d.ts.map