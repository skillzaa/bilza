import Pack from "../pack/pack.js";
export default class Bilzaa2d {
    constructor() {
        this.pack = new Pack();
        this.comps = [];
        this.gapH = 5;
        this.gapV = 5;
    }
    //--function arguments shd be arguments and not classes unless required absoliutely.
    draw(p, x = 0, y = 0) {
        for (let i = 0; i < this.comps.length; i++) {
            //--save ctx
            p.ctx().save();
            this.comps[i].draw(p, x, y);
            //--keep both unless resetCtx has all items
            p.ctx().restore();
            p.ctx().resetCtx(); //why needed??
            if (this.comps[i].width(p) > 0) {
                x += this.comps[i].width(p) + this.gapH;
            }
        }
        return true;
    }
    //--so a lat machine can always get segments from outside as long as they complyby IDrawable interface
    add_comp(comp) {
        this.comps.push(comp);
        return comp;
    }
} //ends
