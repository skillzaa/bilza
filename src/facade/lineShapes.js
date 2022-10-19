import LineShapeFactory from "./lineShapesFactory.js";
export default class LineShapes {
    constructor(linker) {
        this.linker = linker;
    }
    add(secStart, secEnd) {
        const cf = new LineShapeFactory(this.getLinker(secStart, secEnd, "add"));
        return cf;
    }
    alwaysOn() {
        const cf = new LineShapeFactory(this.getLinker(0, 1, "alwaysOn"));
        return cf;
    }
    append(duration) {
        const cf = new LineShapeFactory(this.getLinker(0, duration, "append"));
        return cf;
    }
}
