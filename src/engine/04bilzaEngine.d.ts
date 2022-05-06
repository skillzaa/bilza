import { IComponent } from "../Bilza.js";
import CompFactory from "../compFactory/compFactory.js";
import Background from "./background.js";
import BilzaCanvasSetup from "./03bilzaCanvasSetup.js";
import Text from "../components/text/text.js";
import TextTemplates from "../compFactory/textTemplates.js";
import GridTemplates from "../compFactory/gridTemplates.js";
export default class Bilza extends BilzaCanvasSetup {
    add: CompFactory;
    textTempl: TextTemplates;
    gridTempl: GridTemplates;
    background: Background;
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
}
//# sourceMappingURL=04bilzaEngine.d.ts.map