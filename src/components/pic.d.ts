import Pack from "../pack/pack.js";
import Component from "../engineComponent/engineComponent.js";
import ComponentPack from "../componentPack/componentPack.js";
export default class Pic extends Component {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    constructor(startTime: number, endTime: number, componentPack: ComponentPack, imgUrl: string, width?: number, height?: number);
    init(p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=pic.d.ts.map