import Shadow from "./80Shadow.js";
export default class WidthHeight extends Shadow {
    constructor() {
        super();
    }
    contentWidth() {
        return this.width.value();
    }
    contentHeight() {
        return this.height.value();
    }
    compWidth() {
        return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value() + (this.border.value() * 2);
    }
    compHeight() {
        return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value() + (this.border.value() * 2);
    }
}
