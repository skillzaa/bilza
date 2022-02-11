import { Component, Pack, Style } from "../../bilzaa2d/index.js";
export default class ListItem extends Component {
    content: string;
    x: number;
    y: number;
    rectangleStyle: Style;
    constructor(style?: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=listItem.d.ts.map