import { Style, Pack, IComponent, DrawLayer, Transition } from "./Bilza.js";
import CompDataBase from "./design/CompDataBase.js";
export default class Component<T extends CompDataBase> implements IComponent {
    protected compData: Transition<T>;
    d: T;
    data: T;
    readonly id: string;
    drawLayer: DrawLayer;
    protected msStart: number;
    protected msEnd: number;
    style: Style;
    constructor(DataFn: () => T, startSec?: number, endSec?: number);
    getStartTime(): number;
    setStartTime(seconds?: number): number;
    getEndTime(): number;
    setEndTime(seconds?: number): number;
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    draw(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    log(msg: string): void;
    addTransition(msStart: number): T;
    checkCollision(x: number, y: number, p: Pack): boolean;
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
    resize(width: number, height: number): number;
    drawBoundingRectangle(p: Pack): boolean;
    applyTransition(msDelta: number): void;
}
//# sourceMappingURL=component.d.ts.map