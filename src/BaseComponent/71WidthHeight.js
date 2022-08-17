import Shadow from "./80Shadow.js";
export default class WidthHeight extends Shadow {
    constructor() {
        super();
    }
    compWidth() {
        return this.width.value() + this.paddingLeft.value() + this.paddingRight.value() + (this.border.value() * 2);
    }
    compHeight() {
        return this.height.value() + this.paddingTop.value() + this.paddingBottom.value() + (this.border.value() * 2);
    }
}
