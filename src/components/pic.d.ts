import { Pack, AniNumber, BaseComponent } from "../bilza.js";
export default class Pic extends BaseComponent {
    img: HTMLImageElement;
    protected orignalWidth: number;
    protected orignalHeight: number;
    dynWidth: AniNumber;
    dynHeight: AniNumber;
    constructor(imgUrl: string, dynWidth?: number, dynHeight?: number);
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    width(): number;
    height(): number;
    draw(p: Pack): boolean;
    resize(fromTime: number, toTime: number, fromWidth: number, toWidth: number, fromHeight: number, toHeight: number): void;
}
//# sourceMappingURL=pic.d.ts.map