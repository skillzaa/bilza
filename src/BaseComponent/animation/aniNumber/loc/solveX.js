import { XAlignment } from "../../../../design/xAlignment.js";
import notInitError from "../../../../functions/noInitError.js";
import setBWzeroNhundred from "../../../../functions/setBWzeroNhundred.js";
import { OffScreenXOpt } from "../../../../design/OffScreenXOpt.js";
export default function solveX(ls, compWidth = null, canvasWidth = null) {
    if (canvasWidth == null) {
        throw new Error("canvasWidth = null");
    }
    let localX = 0;
    if (typeof ls.x != "number") {
        const converted = OffScreenToNumber(ls.x, compWidth, canvasWidth);
        const adjest = adjestAlignX(converted, ls.xAlign, compWidth);
        localX = converted + ls.xExtra;
    }
    else {
        const pix = xPercToPix(ls.x, canvasWidth);
        const adjest = adjestAlignX(pix, ls.xAlign, compWidth);
        return adjest + ls.xExtra;
    }
    return localX;
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
function OffScreenToNumber(value, compWidth, canvasWidth) {
    if (compWidth == null || canvasWidth == null) {
        throw new Error("module is not initialized");
    }
    let r = 0;
    switch (value) {
        case OffScreenXOpt.XLeft:
            r = -1 * (compWidth);
            break;
        case OffScreenXOpt.XRight:
            r = xPercToPix(100, canvasWidth) + compWidth;
            break;
        default:
            break;
    }
    return Math.ceil(r);
}
export function adjestAlignX(incomming, xAlign, compWidth) {
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
            x = Math.floor(x - (compWidth));
            break;
    }
    return x;
}
