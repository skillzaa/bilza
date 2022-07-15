import { Pack, AniBoolean, BaseComponent } from "../bilza.js";
export default class Circle extends BaseComponent {
    filled: AniBoolean;
    constructor(color?: string);
    contentWidth(): number;
    contentHeight(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map