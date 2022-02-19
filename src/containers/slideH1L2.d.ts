import { Component, Pack } from "../bilzaa2d/index.js";
import Text from "../components/text/text.js";
import Grid from "../components/grid/grid.js";
export default class SlideH1L2 extends Component {
    grid: Grid;
    h: Text;
    lineOne: Text;
    lineTwo: Text;
    constructor(frameStart?: number, heading?: string, lineOne?: string, lineTwo?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    update(frame: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=slideH1L2.d.ts.map