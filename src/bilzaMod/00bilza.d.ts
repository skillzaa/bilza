import Background from "./background.js";
import Settings from "./settings.js";
import Insert from "./insert.js";
export default class Bilza {
    background: Background;
    insert: Insert;
    set: Settings;
    soundTrackElement: HTMLAudioElement | null;
    soundTrack: string | null;
    private duration;
    private comps;
    private stopWatch;
    private pack;
    private lastMsDelta;
    constructor(canvasId?: string, screenWidthInPercent?: number);
    init(): boolean;
    drawInit(): boolean;
    draw(): boolean;
    drawFrame(msDelta?: number): void;
    len(inMilliSeconds?: boolean): number;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number | null): boolean;
    start(): boolean;
    stop(): boolean;
    resizeCanvas(width: number, height: number | null): void;
    lastMeDelta(): number;
    isRunning(): boolean;
}
//# sourceMappingURL=00bilza.d.ts.map