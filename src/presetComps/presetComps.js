import jumbotron from "../presetComps/jumbotron.js";
import topInHdg from "../presetComps/topInHdg.js";
export default class PresetComps {
    static jumbotron(startFrame = 1, endFrame = 2, content = "Jumbotron", colorHax = "#000000") {
        return jumbotron(startFrame, endFrame, content, colorHax);
    }
    static topInHdg(startFrame = 1, endFrame = 2, content = "Top In Heading", colorHax = "#000000", yUpto = 2) {
        return topInHdg(startFrame, endFrame, content, colorHax, yUpto);
    }
}
