import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class Wave extends Component {
    numberOfWaves: AniNumber;
    midLineColor: AniColor;
    showMidLine: AniBoolean;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, numberOfWaves?: number, color?: string);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=wave.d.ts.map