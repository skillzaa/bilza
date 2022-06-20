import { Pack, BaseComponent, AnimatedNoBase } from "../Bilza.js";
export default class FillRect extends BaseComponent {
    color: string;
    trueWidth: number;
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