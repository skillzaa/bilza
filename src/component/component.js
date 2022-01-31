import { DrawLayer } from "../design/drawLayer.js";
import CtxData from "../design/ctxData.js";
import ctxDefaultInit from "../design/ctxDefaultInit.js";
export default class Component {
    constructor() {
        this.drawLayer = DrawLayer.MiddleGround;
        this.transitions = [];
        //****************************8 */
        this.ctxData = ctxDefaultInit();
        //****************************8 */
        this.frameStart = 0; //component startand end frames
        this.frameEnd = 3000;
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
        let sa = new CtxData(frame);
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
     * Takes the current frame and apply transitions (actually ctxData objects) and merge with components ctxData.
     */
    applyTransitons(frame) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const trctxData = this.transitions[i];
            if (trctxData.startFrame < frame) {
                this.ctxData.merge(trctxData);
                this.transitions.splice(i, 1);
            }
        }
    }
}
