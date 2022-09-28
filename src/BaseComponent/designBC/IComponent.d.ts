import { DrawLayer, Pack } from "../../bilza.js";
import { AniNumber, AniBoolean, AniColor } from "../../animationModule/animations.js";
export default interface IComponent {
    readonly id: string;
    drawLayer: DrawLayer;
    alwaysOn: boolean;
    selected: boolean;
    visible: AniBoolean;
    version: string;
    width: AniNumber;
    height: AniNumber;
    x: AniNumber;
    y: AniNumber;
    border: AniNumber;
    rotation: AniNumber;
    opacity: AniNumber;
    showBackground: AniBoolean;
    colorBackground: AniColor;
    colorBorder: AniColor;
    color: AniColor;
    init(p: Pack): boolean;
    align(x: number, y: number): void;
    alignRotate(x: number, y: number): void;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    compWidth(): number;
    compHeight(): number;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    setTimings(startFrame: number, endFrame: number): number;
    getDuration(): number;
    getStartTime(inMilliSec?: boolean): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map