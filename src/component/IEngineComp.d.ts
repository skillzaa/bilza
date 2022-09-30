import { AniNumber, AniBoolean, AniColor } from "../animationModule/animations.js";
import Pack from "../pack/pack.js";
import Time from "./time.js";
export default interface IEngineComp {
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
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    time: Time;
}
//# sourceMappingURL=IEngineComp.d.ts.map