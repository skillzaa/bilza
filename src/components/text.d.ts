import { Pack, BaseComponent } from "../Bilza.js";
export default class Text extends BaseComponent {
    content: string;
    padding: number;
    border: number;
    maxHeight: number;
    maxDisplayChars: number;
    protected fontSize: number;
    private calcHeight;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    constructor(content?: string, colorHax?: string, dynWidth?: number);
    width(): number;
    height(): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private drawBorder;
    private drawBg;
    private drawContent;
    private reqWdInPix;
    dynamicFontSize(p: Pack): number | null;
}
//# sourceMappingURL=text.d.ts.map