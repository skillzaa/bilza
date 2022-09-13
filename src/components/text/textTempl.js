export default class TextTempl {
    constructor(comp) {
        this.comp = comp;
    }
    hdg(XAlignment = 1, y = 10, height = 10) {
        this.setXAlignment(XAlignment, 0);
        this.comp.y.set(y);
        this.comp.fitToHeight.set(true);
        this.comp.height.set(height);
        this.comp.fitToWidth.set(false);
        this.comp.width.set(100);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        return this.comp;
    }
    jumbotron(XAlignment = 1, y = 50, height = 30) {
        this.setXAlignment(XAlignment, 1);
        this.comp.y.set(y);
        this.comp.width.set(80);
        this.comp.fitToWidth.set(true);
        this.comp.setPaddings(10);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        return this.comp;
    }
    ftNote(XAlignment, y, height) {
        this.setXAlignment(XAlignment);
        this.comp.y.set(y);
        this.comp.showBackground.set(true);
        this.comp.border.set(1);
        this.comp.setPaddings(4);
        return this.comp;
    }
    bltPt(XAlignment, y, height) {
        this.setXAlignment(XAlignment);
        this.comp.y.set(y);
        this.comp.fitToWidth.set(false);
        this.comp.width.set(80);
        this.comp.fitToHeight.set(true);
        this.comp.height.set(height);
        this.comp.showBackground.set(true);
        this.comp.border.set(0);
        this.comp.setPaddings(3);
        this.comp.fontSize.set(120);
        this.comp.height.set(height);
        return this.comp;
    }
    setXAlignment(alignX = 0, y = 0) {
        switch (alignX) {
            case 2:
                this.comp.align(alignX, y);
                this.comp.x.set(100);
                break;
            case 1:
                this.comp.align(alignX, y);
                this.comp.x.set(50);
                break;
            case 0:
            default:
                this.comp.align(alignX, y);
                this.comp.x.set(0);
                break;
        }
    }
}
