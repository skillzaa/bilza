import Text from "../components/text.js";
export default function jumbotron(startFrame = 1, endFrame = 2, content = "Jumbotron", colorHax = "#000000") {
    const jt = new Text(content, colorHax);
    jt.width.set(90);
    return jt;
}
