import Text from "../components/text.js";
export default class TextTempl {
    private comp;
    constructor(comp: Text);
    h1(x?: number, y?: number): Text;
    h2(x?: number, y?: number): Text;
    h3(x?: number, y?: number): Text;
    h4(x?: number, y?: number): Text;
    h5(x?: number, y?: number): Text;
    h6(x?: number, y?: number): Text;
    jumbotron(x?: number, y?: number): Text;
    ftNote(x?: number, y?: number): Text;
    bltPt(x?: number, y?: number, height?: number): Text;
    boldLine(x?: number, y?: number, height?: number): Text;
    slim(fontSize?: number): Text;
}
//# sourceMappingURL=textTempl.d.ts.map