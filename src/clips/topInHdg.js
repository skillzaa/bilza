import { CompFactory as cf, OffScreenYOpt, XAlignment, YAlignment } from "../Bilza.js";
import lightenDarkenColor from "../functions/lightenDarkenColor.js";
export default function topInHdg(content, colorHax, y = 2, duration = 10, timeFrom = 0, timeTo = 2) {
    const t = cf.text(content, colorHax);
    t.dynWidth.setValue(80);
    t.duration = duration;
    t.loc.goto(0, 50, OffScreenYOpt.YTop, XAlignment.Mid, YAlignment.Mid);
    t.showBg = true;
    t.colorBg = lightenDarkenColor(colorHax, 225);
    t.color = colorHax;
    t.border = 5;
    t.colorBorder = colorHax;
    t.loc.animate(timeFrom, timeTo, 50, 50, OffScreenYOpt.YTop, y);
    return t;
}
