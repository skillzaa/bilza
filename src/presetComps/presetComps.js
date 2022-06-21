import jumbotron from "../presetComps/jumbotron.js";
export default class PresetComps {
    static jumbotron(startFrame = 1, endFrame = 2, content = "Jumbotron", colorHax = "#000000") {
        return jumbotron(startFrame, endFrame, content, colorHax);
    }
}
