import Shadow from "./80Shadow.js";
export default class WidthHeight extends Shadow {
    constructor() {
        super();
    }
    contentWidth() {
        if (this.responsiveDims == false) {
            return this.width.value();
        }
        if (this.canvasWidth !== null) {
            return ((this.canvasWidth / 100) * this.width.value());
        }
        else {
            throw new Error("The component is not initialized yet");
        }
    }
    contentHeight() {
        if (this.responsiveDims == false) {
            return this.width.value();
        }
        if (this.canvasHeight !== null) {
            return ((this.canvasHeight / 100) * this.height.value());
        }
        else {
            throw new Error("The component is not initialized yet");
        }
    }
    compWidth() {
        return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value() + (this.border.value() * 2);
    }
    compHeight() {
        return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value() + (this.border.value() * 2);
    }
}
