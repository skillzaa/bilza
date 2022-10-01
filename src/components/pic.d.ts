import Pack from "../pack/pack.js";
import Component from "../component/component.js";
export default class Pic extends Component {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, imgUrl: string, width?: number, height?: number);
    init(p: Pack): boolean;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=pic.d.ts.map