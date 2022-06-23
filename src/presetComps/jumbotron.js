import { CompFactory as cf } from "../bilza.js";
export default function jumbotron(startFrame = 1, endFrame = 2, content = "Jumbotron", colorHax = "#000000") {
    const jt = cf.text(content, colorHax);
    jt.dynWidth.setValue(90);
    jt.goto(0, 50, jt.offScreenYOpt.YTop, jt.xAlign.Mid, jt.yAlign.Mid);
    jt.animate(startFrame, endFrame, 50, 50, jt.offScreenYOpt.YTop, 50, jt.xAlign.Mid, jt.xAlign.Mid, jt.yAlign.Mid, jt.yAlign.Mid);
    return jt;
}
