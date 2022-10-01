import Component from "../../component/component.js";
import Pack from "../../pack/pack.js";
import ComponentPack from "../../compiler/componentPack.js";
import { FontFamily } from "../../pack/fontFamily.js";
import { AniNumber, AniString, AniBoolean } from "../../animations/animations.js";
import TextTempl from "./textTempl.js";
import TextTheme from "./textTheme.js";
export default class Text extends Component {
    private _oldWidth;
    private _oldHeight;
    content: AniString;
    fontFamily: FontFamily;
    fontSize: AniNumber;
    maxDisplayChars: AniNumber;
    fitToWidth: AniBoolean;
    fitToHeight: AniBoolean;
    respFontSize: AniBoolean;
    templ: TextTempl;
    theme: TextTheme;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, content?: string, colorHax?: string);
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