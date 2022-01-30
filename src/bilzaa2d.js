import Pack from "./pack/pack.js";
import { DrawLayer } from "./design/drawLayer.js";
export default class Bilzaa2d {
    constructor() {
        this.pack = new Pack();
        this.comps = [];
        this.totalFrames = 3000; //5min
        this.frame = 0;
    }
    //--function arguments shd be arguments and not classes unless required absoliutely.
    draw() {
        this.frame += 1; /// importanto         
        this.pack.ctx().clearCanvas();
        this.drawBackground();
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            //--save ctx
            if (comp.drawLayer == DrawLayer.MiddleGround) {
                if (comp.frameStart < this.frame && comp.frameEnd > this.frame) {
                    //comp 2update its ctxData
                    comp.update(this.frame, this.pack);
                    this.pack.ctx().save();
                    comp.draw(this.pack);
                    //--keep both unless resetCtx has all items
                    this.pack.ctx().restore();
                    // this.pack.ctx().resetCtx();//why needed??
                }
            }
        }
        return true;
    }
    drawBackground() {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            //--save ctx
            this.pack.ctx().save();
            if (comp.drawLayer == DrawLayer.BackGround) {
                comp.draw(this.pack);
            }
            //--keep both unless resetCtx has all items
            this.pack.ctx().restore();
            //--no width for background items
        }
        return true;
    }
    //--so a lat machine can always get segments from outside as long as they complyby IDrawable interface
    add_comp(comp) {
        this.comps.push(comp);
        return comp;
    }
    start() {
        setInterval(() => {
            // for (let i = 0; i < this.comps.length; i++) {
            // const comp = b.comps[i];
            // comp.x = Math.ceil((Math.random() * 600));
            // }
            this.draw();
        }, 1000);
    }
} //ends
