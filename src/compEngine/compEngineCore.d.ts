import { AniNumber, AniBoolean, AniPerc, AniColor } from "../animations/animations.js";
import Time from "./time.js";
import Style from "../pack/style.js";
import CorePropsDb from "../compDb/corePropsDb.js";
import Pack from "../pack/pack.js";
export default class EngineCompCore {
    border: AniNumber;
    colorBackground: AniColor;
    colorBorder: AniColor;
    color: AniColor;
    selected: boolean;
    height: AniPerc;
    rotation: AniNumber;
    opacity: AniNumber;
    paddingTop: AniPerc;
    paddingBottom: AniPerc;
    paddingRight: AniPerc;
    paddingLeft: AniPerc;
    showBackground: AniBoolean;
    visible: AniBoolean;
    version: string;
    width: AniPerc;
    x: AniPerc;
    y: AniPerc;
    drawLayer: 0 | 1 | 2 | 3 | 4;
    alwaysOn: boolean;
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    id: string;
    protected _canvasWidth: number;
    protected _canvasHeight: number;
    protected style: Style;
    time: Time | null;
    charsWidth: ((chars: string, fontSize: number, fontName: string) => number);
    constructor(corePropsDb: CorePropsDb, pack: Pack);
}
//# sourceMappingURL=compEngineCore.d.ts.map