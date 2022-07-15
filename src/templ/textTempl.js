import Text from "../components/text.js";
export default class TextTempl {
    static hdg(content = "", colorHax = "#008000", width = 30, maxHeight = 20, padding = 12) {
        let g = new Text(content, colorHax);
        g.paddingLeft.set(padding);
        g.paddingRight.set(padding);
        g.paddingTop.set(padding);
        g.paddingBottom.set(padding);
        g.height.set(maxHeight);
        g.width.set(width);
        g.showBackground.set(true);
        g.border.set(2);
        return g;
    }
}
