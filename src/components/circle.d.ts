import { Pack, AniBoolean, AniNumber, BaseComponent } from "../bilza.js";
export default class Circle extends BaseComponent {
    startAngle: AniNumber;
    endAngle: AniNumber;
    filled: AniBoolean;
    constructor(color?: string);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map