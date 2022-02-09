import { DrawLayer } from "./design/drawLayer.js";
import Style from "./style/style.js";
import Xy from "./design/xy.js";
//--This is an Abstract class
//--Do not use CompData here but in sub-classes extend thatfor their own comp data class.
export default class BaseComp {
    constructor(style = new Style()) {
        this.xy = new Xy();
        this.drawLayer = DrawLayer.MiddleGround;
        this.styleTransitions = [];
        //****************************8 */
        this.style = style;
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
    newStyleTransition(frame = 0) {
        let sa = new Style(frame);
        this.styleTransitions.push(sa);
        return sa;
    }
    addStyleTransition(sa) {
        this.styleTransitions.push(sa);
        return true;
    }
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super to apply transitions your self.
     */
    update(frame, p) {
        this.applyStyleTransitons(frame); //--important!!
        this.applyDataTransitons(frame); //--important!!
        return true;
    }
    applyStyleTransitons(frame) {
        for (let i = this.styleTransitions.length - 1; i >= 0; i--) {
            const trctxData = this.styleTransitions[i];
            if (trctxData.frameStart < frame) {
                this.style.merge(trctxData);
                this.styleTransitions.splice(i, 1);
            }
        }
    }
    applyDataTransitons(frame) {
    }
    xPerc(n, p) {
        let xy = new Xy();
        return xy.X(n, this.width(p), p.canvasWidth());
    }
    yPerc(n, p) {
        let xy = new Xy();
        return xy.X(n, this.width(p), p.canvasWidth());
    }
}
