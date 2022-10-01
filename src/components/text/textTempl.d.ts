import Text from "./text.js";
export default class TextTempl {
    private comp;
    constructor(comp: Text);
    hdg(XAlignment?: 0 | 1 | 2 | null, y?: number, height?: number): Text;
    jumbotron(XAlignment?: 0 | 1 | 2 | null, y?: number, height?: number): Text;
    ftNote(XAlignment: 0 | 1 | 2 | null, y: number, height: number): Text;
    bltPt(XAlignment: 0 | 1 | 2 | null, y: number, height: number): Text;
    private setXAlignment;
}
//# sourceMappingURL=textTempl.d.ts.map