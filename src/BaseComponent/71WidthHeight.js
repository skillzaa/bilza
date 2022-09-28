import Shadow from "./80Shadow.js";
export default class WidthHeight extends Shadow {
    constructor() {
        super();
    }
    contentWidth() {
        return this.width.value();
    }
    contentWidthNR() {
        return this.width.valueNR();
    }
    contentHeight() {
        return this.height.value();
    }
    contentHeightNR() {
        return this.height.valueNR();
    }
    compWidth() {
        return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value();
    }
    compWidthPerc() {
        return this.contentWidthNR() + this.paddingLeft.valueNR() + this.paddingRight.valueNR();
    }
    compHeight() {
        return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
    }
    compHeightPerc() {
        return this.contentHeightNR() + this.paddingTop.valueNR() + this.paddingBottom.valueNR();
    }
}
