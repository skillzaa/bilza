import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
import ComponentPack from "../componentPack/componentPack.js";
import Time from "./time.js";
import Style from "../pack/style.js";
export default class EngineCompCore {
    border: AniNumber;
    colorBackground: AniColor;
    colorBorder: AniColor;
    color: AniColor;
    selected: boolean;
    height: AniNumber;
    rotation: AniNumber;
    opacity: AniNumber;
    paddingTop: AniNumber;
    paddingBottom: AniNumber;
    paddingRight: AniNumber;
    paddingLeft: AniNumber;
    showBackground: AniBoolean;
    visible: AniBoolean;
    version: string;
    width: AniNumber;
    x: AniNumber;
    y: AniNumber;
    readonly id: string;
    drawLayer: 0 | 1 | 2 | 3 | 4;
    alwaysOn: boolean;
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    protected style: Style;
    time: Time;
    charsWidth: (chars: string, fontSize: number, fontName: string) => number;
    constructor(componentPack: ComponentPack);
}
//# sourceMappingURL=engineCompCore.d.ts.map