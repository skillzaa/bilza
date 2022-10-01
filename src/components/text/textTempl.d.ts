import Text from "./text.js";
export default class TextTempl {
    private comp;
    constructor(comp: Text);
    hdg(XAlignment?: number, y?: number, height?: number): Text;
    jumbotron(XAlignment?: number, y?: number, height?: number): Text;
    ftNote(XAlignment: number, y: number, height: number): Text;
    bltPt(XAlignment: number, y: number, height: number): Text;
    private setXAlignment;
}
//# sourceMappingURL=textTempl.d.ts.map