import { DrawLayer } from "../design/drawLayer.js";
import Templ from "../design/templ.js";
import ctxDefaultInit from "../design/ctxDefaultInit.js";
import Xy from "../design/xy.js";
export default class Component {
    constructor(x = 0, y = 0) {
        this.drawLayer = DrawLayer.MiddleGround;
        this.transitions = [];
        //****************************8 */
        this.templ = ctxDefaultInit();
        //****************************8 */
        this.frameStart = 0; //component startand end frames
        this.frameEnd = 3000;
        this.xy = new Xy();
        this.x = x;
        this.y = y;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        return true;
    }
    newTransition(frame = 0) {
        let sa = new Templ(frame);
        this.transitions.push(sa);
        return sa;
    }
    addTransition(sa) {
        this.transitions.push(sa);
        return true;
    }
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super or apply transitions your self.
     */
    update(frame, p) {
        this.applyTransitons(frame);
        return true;
    }
    /**
     * Takes the current frame and apply transitions (actually templ objects) and merge with components templ.
     */
    applyTransitons(frame) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const trctxData = this.transitions[i];
            if (trctxData.startFrame < frame) {
                this.templ.merge(trctxData);
                if (trctxData.x !== null) {
                    this.x = trctxData.x;
                }
                if (trctxData.y !== null) {
                    this.y = trctxData.y;
                }
                this.transitions.splice(i, 1);
            }
        }
    }
}
