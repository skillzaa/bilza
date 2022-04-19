import { Style, Pack, IComponent, DrawLayer, Transition } from "./Bilza.js";
import CompDataBase from "./design/CompDataBase.js";
export default class Component<T extends CompDataBase> implements IComponent {
    protected compData: Transition<T>;
    d: T;
    data: T;
    readonly id: string;
    drawLayer: DrawLayer;
    protected display: boolean;
    protected selected: boolean;
    protected msStart: number;
    protected msEnd: number;
    style: Style;
    constructor(DataFn: () => T, msStart?: number, msEnd?: number);
    getSelected(): boolean;
    setSelected(b: boolean): boolean;
    getDisplay(): boolean;
    setDisplay(b: boolean): boolean;
    getStartTime(): number;
    setStartTime(n?: number): number;
    getEndTime(): number;
    setEndTime(n?: number): number;
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    addTransition(msStart: number): T;
    checkCollision(x: number, y: number, p: Pack): boolean;
    shadowsOff(): void;
    shadowsOn(): void;
    resize(width: number, height: number): number;
    drawBoundingRectangle(p: Pack): boolean;
}
//# sourceMappingURL=component.d.ts.map