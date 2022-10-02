import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class CoreProps {
    readonly id: string;
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
    drawLayer: 0 | 1 | 2 | 3 | 4;
    alwaysOn: boolean;
    constructor();
}
//# sourceMappingURL=coreProps.d.ts.map