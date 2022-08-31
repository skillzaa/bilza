import { Scene, CompFactory as cf, hsl } from "../bilza.js";
export default class Slide extends Scene {
    constructor(startTime, endTime) {
        super(startTime, endTime);
    }
    addGrid(hslValue = hsl(240)) {
        const grid = cf.grid(10, 10, hslValue);
        this.add(grid, this.startTimePlus(), this.endTimeMinus());
        return grid;
    }
    addH1(content, Hue_0_to_360 = 0) {
        const comp = cf.text(content);
        comp.templ.h1();
        comp.theme.color(Hue_0_to_360);
        this.add(comp, this.startTimePlus(), this.endTimeMinus());
        return comp;
    }
}
