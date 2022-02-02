import { DrawLayer } from "../design/drawLayer.js";
import Style from "../style/style.js";
import Xy from "../design/xy.js";
export default class Component {
    constructor(style = new Style()) {
        this.drawLayer = DrawLayer.MiddleGround;
        this.styleTransitions = [];
        this.dataTransitions = [];
        //****************************8 */
        this.style = style;
        // this.compData = compData;
        //****************************8 */
        this.frameStart = 0; //component startand end frames
        this.frameEnd = 3000;
        this.xy = new Xy();
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
    newDataTransition(frame = 0) {
        //--how can i write this fn unless I know the data object for this comp.
        let t = { frameStart: frame };
        // let sa = new CompData(frame);//-wrong cant be aconcrete obj before its even known    
        this.dataTransitions.push(t);
        return t;
    }
    addDataTransition(cd) {
        this.dataTransitions.push(cd);
        return true;
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
        for (let i = this.dataTransitions.length - 1; i >= 0; i--) {
            const trctxData = this.dataTransitions[i];
            if (trctxData.frameStart < frame) {
                this.compData = this.merge(this.compData, trctxData);
                this.dataTransitions.splice(i, 1);
            }
        }
    }
    //--this merge is only for compData for style ithas its own merge fn.
    merge(superset, subset) {
        //---- Your merge code here    
        return superset;
    }
}
