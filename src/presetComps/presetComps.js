import jumbotron from "../presetComps/jumbotron.js";
import topInHdg from "../presetComps/topInHdg.js";
import bulletPoint from "../presetComps/bulletPoint.js";
export default class PresetComps {
    static jumbotron(startFrame = 1, endFrame = 2, content = "Jumbotron", colorHax = "#000000") {
        return jumbotron(startFrame, endFrame, content, colorHax);
    }
    static topInHdg(startFrame = 1, endFrame = 2, content = "Top In Heading", colorHax = "#000000", yUpto = 2) {
        return topInHdg(startFrame, endFrame, content, colorHax, yUpto);
    }
    static bulletPoint(startFrame = 1, endFrame = 2, content = "bulletPoint", colorHax = "#000000", y = 5) {
        return bulletPoint(startFrame, endFrame, content, colorHax, y);
    }
}
