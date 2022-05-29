import { XAlignment } from "../xAxis/xAlignment.js";
import notInitError from "../../../../functions/noInitError.js";
import setBWzeroNhundred from "../../../../functions/setBWzeroNhundred.js";
import { OffScreenXOpt } from "../xAxis/OffScreenXOpt.js";
export default function solveX(xPercent, xAlign = XAlignment.Left, xExtra = 0, canvasWidth = null) {
    if (canvasWidth !== null) {
        const pix = xPercToPix(xPercent, canvasWidth);
    }
    else {
        notInitError();
    }
}
function xPercToPix(perc, canvasWidth) {
    let r = 0;
    if (canvasWidth == null) {
        notInitError();
    }
    else {
        let checked = setBWzeroNhundred(perc);
        r = Math.ceil((canvasWidth / 100) * checked);
    }
    return r;
}
function translateOffScreen(value, compWidth, canvasWidth) {
    if (compWidth == null || canvasWidth == null) {
        throw new Error("module is not initialized");
    }
    if (typeof value == "number") {
        return xPercToPix(value, canvasWidth);
    }
    let r = 0;
    switch (value) {
        case OffScreenXOpt.XLeft:
            r = -1 * (compWidth);
            break;
        case OffScreenXOpt.XRight:
            r = xPercToPix(100, compWidth) + compWidth;
            break;
        default:
            break;
    }
    return Math.ceil(r);
}
function adjestAlign(incomming, xAlign, compWidth) {
    if (compWidth == null) {
        throw new Error("init error");
    }
    let x = incomming;
    switch (xAlign) {
        case XAlignment.Left:
            break;
        case XAlignment.Mid:
            x = Math.floor(x - ((compWidth / 2)));
            break;
        case XAlignment.Right:
            Math.floor(x - (compWidth));
            break;
    }
    return x;
}
