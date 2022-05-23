import AnimatedNoBase from "./AnimatedNoBase.js";
import { XAlignment } from "../../../design/xAlignment.js";
import { OffScreenXOpt } from "../../OffScreenXOpt.js";
export default class XAxis extends AnimatedNoBase {
    constructor(defaultValue) {
        super(defaultValue);
        this.xAlignmentOptions = XAlignment;
        this.xAlign = this.xAlignmentOptions.Mid;
    }
    translateOffScreen(value) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (typeof value == "number") {
            return this.xPercToPix(value);
        }
        let r = 0;
        switch (value) {
            case OffScreenXOpt.XLeft:
                r = -1 * (this.compWidth());
                break;
            case OffScreenXOpt.XRight:
                r = this.xPercToPix(100) + this.compWidth();
                break;
            default:
                break;
        }
        return Math.ceil(r);
    }
    update(msDelta) {
        super.update(msDelta);
        return true;
    }
    value() {
        const r = super.value();
        return this.adjestAlign(r);
    }
    initIncDec() {
        for (let i = 0; i < this.preInitIncDecArray.length; i++) {
            const elm = this.preInitIncDecArray[i];
            if (elm.startValue < elm.endValue) {
                this.newIncrement(elm.from, elm.to, elm.startValue, elm.endValue);
            }
            else {
                this.newDecrement(elm.from, elm.to, elm.startValue, elm.endValue);
            }
        }
    }
    adjestAlign(incomming) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        let x = incomming;
        switch (this.xAlign) {
            case this.xAlignmentOptions.Left:
                break;
            case this.xAlignmentOptions.Mid:
                x = Math.floor(x - ((this.compWidth() / 2)));
                break;
            case this.xAlignmentOptions.Right:
                Math.floor(x - (this.compWidth()));
                break;
        }
        return x;
    }
}
