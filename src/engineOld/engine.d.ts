import { IComponent } from "../bilza.js";
import Background from "../components/background.js";
import IScene from "../scene/IScene.js";
import Settings from "./settings.js";
import CompFactory from "./insert/compFactory.js";
import Insert from "./insert/insert.js";
export default class Bilza {
    background: Background;
    _insert: Insert;
    set: Settings;
    private soundTrackElement;
    soundTrack: string | null;
    private duration;
    private comps;
    private stopWatch;
    private pack;
    private lastMsDelta;
    constructor(canvasId?: string, screenWidthInPercent?: number);
    init(): boolean;
    private drawForStart;
    draw(msDelta?: number): void;
    private draw_internal;
    len(inMilliSeconds?: boolean): number;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    start(): boolean;
    stop(): boolean;
    resizeCanvas(width: number, height: number | null): void;
    getLastMsDelta(): number;
    isRunning(): boolean;
    add(startTime: number, endTime: number): CompFactory;
    alwaysOn(): CompFactory;
    append(duration: number): any;
    insert(comp: IComponent, startTime: number, endTime: number, actionType: string): IComponent;
    addScene(scene: IScene): void;
    getComps(): IComponent[];
    getCtx(): CanvasRenderingContext2D;
}
//# sourceMappingURL=engine.d.ts.map