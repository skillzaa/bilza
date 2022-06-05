import { Pack, BaseComponent, FontFamily } from "../../Bilza.js";
import AnimatedNoBase from "../../BaseComponent/animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
export default class Text002 extends BaseComponent {
    content: string;
    fontFamily: FontFamily;
    paddingLeft: AnimatedNoBase;
    paddingRight: AnimatedNoBase;
    paddingTop: AnimatedNoBase;
    paddingBottom: AnimatedNoBase;
    fontSize: number;
    border: AnimatedNoBase;
    maxDisplayChars: number;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    protected realWidth: number;
    protected realHeight: number;
    constructor(content?: string, colorHax?: string, fontSize?: number, x?: number, y?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=text002.d.ts.map