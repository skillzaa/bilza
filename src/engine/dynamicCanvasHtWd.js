import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import DWidthHeight from "./DWidthHeight.js";
export default function dynamicCanvasHtWd(widthInPercent = 95, heightInPercent = null) {
    let dWidthHeight = new DWidthHeight();
    dWidthHeight.width = window.innerWidth / 100 * setBWzeroNhundred(widthInPercent);
    if (heightInPercent !== null) {
        dWidthHeight.height = window.innerHeight / 100 * setBWzeroNhundred(heightInPercent);
    }
    return dWidthHeight;
}
