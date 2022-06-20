import { Pack, BaseComponent, AnimatedNoBase } from "../Bilza.js";
export default class Rect extends BaseComponent {
    dynWidth: AnimatedNoBase;
    dynHeight: AnimatedNoBase;
    lineWidth: AnimatedNoBase;
    color: string;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=rect.d.ts.map