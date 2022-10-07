import BackgroundDb from "../components/background/backgroundDb.js";
export default class EngineDb {
    readonly canvasId: string;
    readonly canvasWidthPerc: number;
    readonly canvasWidth: number;
    readonly canvasHeight: number;
    charsWidth: (chars: string, fontSize: number, fontName: string) => number;
    backgroundDb: BackgroundDb;
    private responsiveMode;
    constructor(canvasId?: string, canvasWidthPerc?: number);
}
//# sourceMappingURL=engineDb.d.ts.map