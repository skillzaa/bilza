import Pack from "../pack/pack.js";
import Component from "../EngineComponent/component.js";
import ComponentPack from "../componentPack/componentPack.js";
import { AniNumber, AniBoolean, AniColor } from "../animations/animations.js";
export default class Wave extends Component {
    numberOfWaves: AniNumber;
    midLineColor: AniColor;
    showMidLine: AniBoolean;
    constructor(id: string, startTime: number, endTime: number, componentPack: ComponentPack, numberOfWaves?: number, color?: string);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=wave.d.ts.map