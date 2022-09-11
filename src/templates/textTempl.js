export default class TextTempl {
    constructor(comp) {
        this.comp = comp;
    }
    h1(x = 50, y = 5) {
        this.comp.showBackground.set(true);
        this.comp.setxy(x, y);
        this.comp.align(1, 0);
        this.comp.alignRotate(1, 1);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(50);
        this.comp.height.set(15);
        this.comp.fitToWidth.set(true);
        return this.comp;
    }
    h2(x = 50, y = 5) {
        this.comp.setxy(x, y);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(40);
        this.comp.height.set(12);
        this.comp.fitToWidth.set(true);
        return this.comp;
    }
    h3(x = 50, y = 5) {
        this.comp.setxy(x, y);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(30);
        this.comp.height.set(10);
        this.comp.fitToWidth.set(true);
        return this.comp;
    }
    h4(x = 50, y = 5) {
        this.comp.setxy(x, y);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(20);
        this.comp.height.set(8);
        this.comp.fitToWidth.set(true);
        return this.comp;
    }
    h5(x = 50, y = 5) {
        this.comp.setxy(x, y);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(10);
        this.comp.height.set(6);
        this.comp.fitToWidth.set(true);
        return this.comp;
    }
    h6(x = 50, y = 5) {
        this.comp.setxy(x, y);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        this.comp.setPaddings(8);
        this.comp.width.set(5);
        this.comp.height.set(5);
        this.comp.fitToWidth.set(true);
        return this.comp;
    }
    jumbotron(x = 50, y = 50) {
        this.comp.setxy(x, y);
        this.comp.align(1, 1);
        this.comp.width.set(80);
        this.comp.fitToWidth.set(true);
        this.comp.height.set(20);
        this.comp.setPaddings(10);
        this.comp.showBackground.set(true);
        this.comp.border.set(5);
        return this.comp;
    }
    ftNote(x = 10, y = 95) {
        this.comp.setxy(5, y);
        this.comp.align(0, 2);
        this.comp.showBackground.set(true);
        this.comp.border.set(1);
        this.comp.setPaddings(4);
        return this.comp;
    }
    bltPt(x = 50, y = 50, height = 15) {
        this.comp.align(1, 1);
        this.comp.x.set(x);
        this.comp.y.set(y);
        this.comp.showBackground.set(true);
        this.comp.border.set(0);
        this.comp.setPaddings(3);
        this.comp.fontSize.set(120);
        this.comp.height.set(height);
        return this.comp;
    }
    boldLine(x = 10, y = 10, height = 15) {
        this.comp.align(0, 0);
        this.comp.x.set(x);
        this.comp.y.set(y);
        this.comp.showBackground.set(true);
        this.comp.border.set(0);
        this.comp.setPaddings(3);
        this.comp.fontSize.set(120);
        this.comp.height.set(height);
        return this.comp;
    }
    slim(fontSize = 50) {
        this.comp.showBackground.set(false);
        this.comp.border.set(0);
        this.comp.setPaddings(0);
        this.comp.fontSize.set(fontSize);
        return this.comp;
    }
}
