import Text from "../components/text.js";
export default class TextTempl {
    private comp;
    constructor(comp: Text);
    h1(): Text;
    h2(): Text;
    h3(): Text;
    h4(): Text;
    h5(): Text;
    h6(): Text;
    jumbotron(): Text;
    ftNote(x?: number, y?: number): Text;
    bltPt(y?: number, height?: number): Text;
    slim(fontSize?: number): Text;
}
//# sourceMappingURL=textTempl.d.ts.map