import { Style, Pack, IComponent, DrawLayer, Transition, IMsStart } from "./Bilza.js";
export default class Component<T extends IMsStart> implements IComponent {
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
    getStart(): number;
    setStart(n?: number): number;
    getEnd(): number;
    setEnd(n?: number): number;
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    addTransition(msStart: number): T;
    checkCollision(x: number, y: number, p: Pack): boolean;
    shadowsOff(): void;
    resize(width: number, height: number): number;
}
//# sourceMappingURL=component.d.ts.map