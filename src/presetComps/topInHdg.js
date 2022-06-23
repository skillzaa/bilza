import { CompFactory as cf } from "../Bilza.js";
export default function topInHdg(startFrame = 1, endFrame = 2, content = "Top In Heading", colorHax = "#000000", yUpto = 5) {
    const jt = cf.text(content, colorHax);
    jt.dynWidth.setValue(60);
    jt.maxHeight = 20;
    jt.goto(0, 50, 50, jt.xAlign.Mid, jt.yAlign.Top);
    jt.border.setValue(1);
    jt.animate(startFrame, endFrame, 50, 50, jt.offScreenYOpt.YTop, yUpto, jt.xAlign.Mid, jt.xAlign.Mid, jt.yAlign.Top, jt.yAlign.Top);
    return jt;
}
