import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Pack from "../../pack/pack.js";
import { AniNumberDb, AniStringDb, AniBooleanDb } from "../../animations/animations.js";
import IText from "./IText.js";
import { FontFamily } from "../../pack/fontFamily.js";
import Linker from "../../facade/linker.js";
export default class TextDb extends CompDb implements IText {
    content: AniStringDb;
    fontFamily: FontFamily;
    maxDisplayChars: AniNumberDb;
    fitToWidth: AniBooleanDb;
    private _oldWidth;
    private _oldHeight;
    heightFineTune: number;
    private charsWidth;
    constructor(linker: Linker, content: string, color: string);
    contentHeight(): number;
    contentWidth(): number;
    getEngineComp(pack: Pack): compEngine;
    private getFontSize;
    protected widthFontSize(): number;
    private heightFontSize;
    private hasWidthChanged;
}
//# sourceMappingURL=textDb.d.ts.map