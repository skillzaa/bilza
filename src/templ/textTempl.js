import Text from "../components/text.js";
export default class TextTempl {
    static hdg(content = "", colorHax = "#008000", width = 30, maxHeight = 20, padding = 12) {
        let g = new Text(content, colorHax);
        g.paddingLeft.setInitValue(padding);
        g.paddingRight.setInitValue(padding);
        g.paddingTop.setInitValue(padding);
        g.paddingBottom.setInitValue(padding);
        g.maxHeight = maxHeight;
        g.width.set(width);
        g.showBackground.set(true);
        g.border.set(2);
        return g;
    }
}
