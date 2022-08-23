import { DrawLayer, Pack, Style } from "../../bilza.js";
import { AniNumber, AniPerc, AniBoolean, AniColor } from "../../animationModule/animations.js";
export default interface IComponent {
    readonly id: string;
    drawLayer: DrawLayer;
    duration: number;
    alwaysOn: boolean;
    visible: AniBoolean;
    version: string;
    width: AniNumber | AniPerc;
    height: AniNumber | AniPerc;
    x: AniNumber | AniPerc;
    y: AniNumber | AniPerc;
    border: AniNumber;
    rotation: AniNumber;
    opacity: AniNumber;
    showBackground: AniBoolean;
    colorBackground: AniColor;
    style: Style;
    setRespPadding(tf: boolean): boolean;
    setRespDims(tf: boolean): boolean;
    setRespLoc(tf: boolean): boolean;
    init(p: Pack): boolean;
    align(x: number, y: number): void;
    alignRotate(x: number, y: number): void;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    setStartTime(n: number): number;
    getStartTime(inMilliSec?: boolean): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map