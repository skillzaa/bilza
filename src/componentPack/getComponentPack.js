import ComponentPack from "./componentPack.js";
export default function getComponentPack(pack) {
    const canvasWidth = pack.canvasWidth();
    const canvasHeight = pack.canvasHeight();
    const charsWidth = pack.charsWidth;
    const compPack = new ComponentPack(canvasWidth, canvasHeight, charsWidth);
    return compPack;
}
