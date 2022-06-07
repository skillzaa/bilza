import { OffScreenYOpt, XAlignment, YAlignment } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTempl {
    static TinHdg(content = "", colorHax = "#008000", fromSec = 0, toSec = 4, x = 0, yUpto = 3, dynWidth = 30, maxHeight = 20, padding = 12) {
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
        g.loc.goto(0, x, OffScreenYOpt.YTop, XAlignment.Mid, YAlignment.Top);
        g.loc.animate(fromSec, toSec, x, x, OffScreenYOpt.YTop, yUpto, XAlignment.Mid, XAlignment.Mid);
        return g;
    }
}
