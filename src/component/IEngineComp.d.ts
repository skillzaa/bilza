import { AniNumber, AniBoolean, AniColor } from "../animationModule/animations.js";
import Pack from "../pack/pack.js";
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
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=IEngineComp.d.ts.map