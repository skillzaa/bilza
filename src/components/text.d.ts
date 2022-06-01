import { Pack, BaseComponent } from "../Bilza.js";
export default class Text extends BaseComponent {
    content: string;
    padding: number;
    border: number;
    maxDisplayChars: number;
    fontSize: number;
    color: string;
    colorBorder: string;
    colorBg: string;
    showContent: boolean;
    showBg: boolean;
    showTextShadow: boolean;
    showBorderShadow: boolean;
    showBgShadow: boolean;
    constructor(content?: string, colorHax?: string, x?: number, y?: number, dynWidth?: number, dynHeight?: number);
    width(): number;
    height(): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    private drawBorder;
    private drawBg;
    private drawContent;
}
//# sourceMappingURL=text.d.ts.map