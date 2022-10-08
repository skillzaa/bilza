import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import TextDb from "./textDb.js";
import { FontFamily } from "../../pack/fontFamily.js";
import { AniNumber, AniString, AniBoolean } from "../../animations/animations.js";
export default class Text extends CompEngine {
    private _oldWidth;
    private _oldHeight;
    heightFineTune: number;
    content: AniString;
    fontFamily: FontFamily;
    maxDisplayChars: AniNumber;
    fitToWidth: AniBoolean;
    constructor(propsDb: TextDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    private getFontSize;
    protected widthFontSize(): number;
    private heightFontSize;
    private hasWidthChanged;
}
//# sourceMappingURL=text.d.ts.map