import { YAlignment } from "../design/yAlignment.js";
import notInitError from "../functions/noInitError.js";
import setBWzeroNhundred from "../functions/setBWzeroNhundred.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
export default function solveY(ls, compHeight = null, canvasHeight = null) {
    if (canvasHeight == null) {
        throw new Error("canvasWidth = null");
    }
    let localY = 0;
    if (typeof ls.y != "number") {
        const converted = OffScreenToNumber(ls.y, compHeight, canvasHeight);
        const adjest = adjestAlign(converted, ls.yAlign, compHeight);
        localY = converted + ls.yExtra;
    }
    else {
        const pix = yPercToPix(ls.y, canvasHeight);
        const adjest = adjestAlign(pix, ls.yAlign, compHeight);
        localY = adjest + ls.yExtra;
    }
    return localY;
}
function yPercToPix(perc, canvasHeight) {
    let r = 0;
    if (canvasHeight == null) {
        notInitError();
    }
    else {
        let checked = setBWzeroNhundred(perc);
        r = Math.ceil((canvasHeight / 100) * checked);
    }
    return r;
}
function OffScreenToNumber(value, compHeight, canvasHeight) {
    if (compHeight == null || canvasHeight == null) {
        throw new Error("module is not initialized");
    }
    let r = 0;
    switch (value) {
        case OffScreenYOpt.YTop:
            r = -1 * (canvasHeight);
            break;
        case OffScreenYOpt.YBot:
            r = yPercToPix(100, canvasHeight) + canvasHeight;
            break;
        default:
            break;
    }
    return Math.ceil(r);
}
function adjestAlign(incomming, yAlign, compHeight) {
    if (compHeight == null) {
        throw new Error("init error");
    }
    let x = incomming;
    switch (yAlign) {
        case YAlignment.Top:
            break;
        case YAlignment.Mid:
            x = Math.floor(x - ((compHeight / 2)));
            break;
        case YAlignment.Bot:
            x = Math.floor(x - (compHeight));
            break;
    }
    return x;
}
