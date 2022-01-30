import { DrawLayer } from "../design/drawLayer.js";
import TransitionData from "../design/transitionData.js";
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
    addTransition(frame = 0) {
        let sa = new TransitionData(frame);
        this.transitions.push(sa);
        return sa;
    }
    newTransition(sa) {
        this.transitions.push(sa);
        return true;
    }
    update(frame, p) {
        this.applyTransitons(frame);
        return true;
    }
    applyTransitons(frame) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const tr = this.transitions[i];
            if (tr.startFrame < frame) {
                this.ctxData.merge(tr.ctxData);
                this.transitions.splice(i, 1);
            }
        }
    }
}
