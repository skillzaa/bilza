import { DrawLayer } from "../design/drawLayer.js";
import Style from "../style/style.js";
import Xy from "../design/xy.js";
// import {Cornor} from "../design/cornor.js";
export default class Component {
    constructor(x = 0, y = 0) {
        this.drawLayer = DrawLayer.MiddleGround;
        this.styleTransitions = [];
        //****************************8 */
        this.style = new Style();
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
        let sa = new Style(frame);
        this.styleTransitions.push(sa);
        return sa;
    }
    addTransition(sa) {
        this.styleTransitions.push(sa);
        return true;
    }
    /**
     * For now it just apply Transitions. In sub classes if this fn is over ridden then you have to call update of super or apply transitions your self.
     */
    update(frame, p) {
        this.applyTransitons(frame); //--important!!
        return true;
    }
    applyTransitons(frame) {
        for (let i = this.styleTransitions.length - 1; i >= 0; i--) {
            const trctxData = this.styleTransitions[i];
            if (trctxData.startFrame < frame) {
                this.style.merge(trctxData);
                //--x and y removed form templ and placed in comp since they cannot be null just like elms in templ has to since we filter out null elms of a templ during transition
                if (trctxData.x !== null) {
                    this.x = trctxData.x;
                }
                if (trctxData.y !== null) {
                    this.y = trctxData.y;
                }
                this.styleTransitions.splice(i, 1);
            }
        }
    }
}
