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
    constructor(content?: string, colorHax?: string);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    height(): number;
    width(): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=text002.d.ts.map