import Text from "../components/text/text.js";
export default class TextTempl {
    static hdg(content = "", colorHax = "#008000", dynWidth = 30, maxHeight = 20, padding = 12) {
        let g = new Text(content, colorHax);
        g.useDynWidth = true;
        g.useMaxHeight = true;
        g.paddingLeft.setValue(padding);
        g.paddingRight.setValue(padding);
        g.paddingTop.setValue(padding);
        g.paddingBottom.setValue(padding);
        g.maxHeight = maxHeight;
        g.dynWidth.setValue(dynWidth);
        g.showBg = true;
        g.border.setValue(2);
        return g;
    }
}
