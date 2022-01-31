import Templ from "./templ.js";
export default function defaultTemplInit() {
    let templ = new Templ();
    templ.fillStyle = "#070707";
    templ.strokeStyle = "#070707";
    templ.fontName = "serif";
    templ.fontSize = 25;
    templ.lineWidth = 2;
    return templ;
}
