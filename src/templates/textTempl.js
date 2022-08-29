export default class TextTempl {
    constructor(comp) {
        this.comp = comp;
    }
    h1() {
        this.comp.align(1, 0);
        this.comp.x.set(50);
        this.comp.y.set(5);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(50);
        this.comp.height.set(15);
        this.comp.fitToWidth.set(true);
        this.comp.shrinkToHeight.set(true);
    }
    jumbotron() {
        this.comp.x.set(50);
        this.comp.y.set(40);
        this.comp.align(1, 1);
        this.comp.showBackground.set(true);
        this.comp.border.set(15);
        this.comp.setPaddings(10);
        this.comp.width.set(100);
        this.comp.height.set(20);
        this.comp.respFontSize.set(false);
        this.comp.fitToWidth.set(true);
    }
    ftNoteL(x = 10) {
        this.comp.x.set(5);
        this.comp.y.set(95);
        this.comp.align(0, 2);
        this.comp.showBackground.set(true);
        this.comp.border.set(1);
        this.comp.setPaddings(4);
        this.comp.respFontSize.set(true);
    }
    bltPt(y = 50, height = 15) {
        this.comp.align(1, 1);
        this.comp.x.set(50);
        this.comp.y.set(y);
        this.comp.showBackground.set(true);
        this.comp.border.set(0);
        this.comp.setPaddings(3);
        this.comp.fontSize.set(120);
        this.comp.height.set(height);
        this.comp.respFontSize.set(true);
        this.comp.shrinkToHeight.set(true);
    }
}
