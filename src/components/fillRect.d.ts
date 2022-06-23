import { Pack, BaseComponent, AnimatedNoBase } from "../bilza.js";
export default class FillRect extends BaseComponent {
    color: string;
    dynWidth: AnimatedNoBase;
    dynHeight: AnimatedNoBase;
    constructor(color?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=fillRect.d.ts.map