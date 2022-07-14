import { DrawLayer, Pack, Style, AniNumber, AniBoolean } from "../../bilza.js";
export default interface IComponent {
    readonly id: string;
    usePercentages: boolean;
    drawLayer: DrawLayer;
    duration: number;
    alwaysOn: boolean;
    visible: AniBoolean;
    version: string;
    width: AniNumber;
    height: AniNumber;
    style: Style;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    widthInPix(): number;
    heightInPix(): number;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    contentWidth(): number;
    contentHeight(): number;
    setStartTime(n: number): number;
    getStartTime(inMilliSec?: boolean): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map