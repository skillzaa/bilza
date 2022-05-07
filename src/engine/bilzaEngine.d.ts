import { IComponent } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import BilzaEngineBase from "./bilzaEngineBase.js";
import Text from "../components/text/text.js";
import TextTemplWrapper from "../compFactory/textTemplWrapper.js";
import GridTemplates from "../compFactory/gridTemplates.js";
export default class Bilza extends BilzaEngineBase {
    add: CompFactory;
    textTempl: TextTemplWrapper;
    gridTempl: GridTemplates;
    background: Background;
    protected interval: number | null;
    protected msPerFrame: number;
    protected timeStart: number | null;
    protected timeEnd: number;
    constructor(canvasId?: string, timeEndSec?: number, canvasWidth?: number, canvasHeight?: null | number);
    insert(comp: IComponent): IComponent;
    insertAt(comp: IComponent, second: number): IComponent;
    start(): boolean;
    drawInit(): void;
    draw(): boolean;
    drawEvent(msDelta: number): boolean;
    dynamicCanvas(widthInPercent?: number, heightInPercent?: number): boolean;
    dynamicFontSize(txt: Text, widthPercent?: number, heightPercent?: number | null, setFontSize?: boolean): number | null;
    init(): void;
    getTimeEnd(): number;
    setTimeEnd(n: number): number;
    protected getMsDelta(): number;
    setMsDelta(n: number): number;
    stop(): boolean;
}
//# sourceMappingURL=bilzaEngine.d.ts.map