import Templ from "./templ.js";
//These are default style for any comp
export default function defaultTemplInit() {
    let templ = new Templ();
    templ.startFrame = 0; //must
    templ.fillStyle = "#070707";
    templ.strokeStyle = "#070707";
    templ.fontName = "serif";
    templ.fontSize = 25;
    templ.lineWidth = 2;
    return templ;
}
