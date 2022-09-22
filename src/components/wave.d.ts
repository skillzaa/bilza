import { Pack } from "../bilza.js";
import { AniNumber, AniBoolean, AniColor } from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Wave extends BaseComponent {
    numberOfWaves: AniNumber;
    midLineColor: AniColor;
    showMidLine: AniBoolean;
    constructor(numberOfWaves?: number, color?: string);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=wave.d.ts.map