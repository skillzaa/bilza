import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import TextDb from "./textDb.js";
import { FontFamily } from "../../pack/fontFamily.js";
import { AniNumber, AniString, AniBoolean } from "../../animations/animations.js";
export default class Text extends CompEngine {
    private _oldWidth;
    private _oldHeight;
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    fitToWidth: AniBoolean;
    fitToHeight: AniBoolean;
    respFontSize: AniBoolean;
    constructor(propsDb: TextDb, pack: Pack);
    update(msDelta: number, p: Pack): boolean;
    contentHeight(): number;
    contentWidth(): number;
    draw(p: Pack): boolean;
    drawContent(p: Pack): void;
    protected fitToWidthFn(p: Pack): number | null;
    protected fitToHeightFn(p: Pack): number | null;
    protected shrinkToHeightFn(p: Pack): boolean;
    protected shrinkToWidthFn(p: Pack): boolean;
    private hasWidthChanged;
    private hasHeightChanged;
}
//# sourceMappingURL=text.d.ts.map