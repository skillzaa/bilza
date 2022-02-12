import { Component, Pack, Style } from "../../bilzaa2d/index.js";
export default class FrameCounter extends Component {
    frame: number;
    styleRectangle: Style;
    styleNumbers: Style;
    padding: number;
    x: number;
    y: number;
    content: string;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    update(frame: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=frameCounter.d.ts.map