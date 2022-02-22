import { Component, Pack, Style, Transition } from "../../bilzaa2d/index.js";
import { TextData } from "./DataFn.js";
export default class Text extends Component {
    compData: Transition<TextData>;
    constructor(style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=text.d.ts.map