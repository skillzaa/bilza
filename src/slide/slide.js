import Scene from "../scene/scene.js";
import { CompFactory as cf, hsl } from "../bilza.js";
export default class Slide extends Scene {
    constructor(startTime, endTime, themeHue_0_to_360 = 240) {
        super(startTime, endTime);
        this.themeHue_0_to_360 = themeHue_0_to_360;
    }
    addBltPt(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.bltPt(y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addH1(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.h1(x, y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addH2(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.h2(x, y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addH3(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.h3(x, y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addH4(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.h4(x, y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addH5(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.h5(x, y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addH6(content, entryTimePlus = 0, exitTimeMinus = 0, x = 50, y = 5, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ? this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.text(content);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.templ.h6(x, y);
        comp.entryAni.topIn();
        comp.exitAni.fadeOut();
        comp.theme.color(newColor);
        return comp;
    }
    addGrid(cellWidth = 10, cellHeight = 10, color = null) {
        const newColor = color == null ? hsl(this.themeHue_0_to_360) : color;
        const grid = cf.grid(cellWidth, cellHeight, newColor);
        this.add(grid);
        return grid;
    }
    addCanvasBorder(borderWidth = 0.5, entryTimePlus = 0, exitTimeMinus = 0, color = null) {
        const newColor = color == null ?
            hsl(this.themeHue_0_to_360) : color;
        const comp = cf.canvasBorder(newColor, borderWidth);
        this.add(comp, entryTimePlus, exitTimeMinus);
    }
    addFrameCounter(entryTimePlus = 0, exitTimeMinus = 0, x = 90, y = 90, Hue_0_to_360 = null) {
        const newColor = Hue_0_to_360 == null ?
            this.themeHue_0_to_360 : Hue_0_to_360;
        const comp = cf.frameCounter((newColor));
        comp.setxy(x, y);
        this.add(comp, entryTimePlus, exitTimeMinus);
        comp.entryAni.fadeIn();
        comp.exitAni.fadeOut();
    }
}
