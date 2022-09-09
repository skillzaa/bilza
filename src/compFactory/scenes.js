import h13bp from "../scenes/h13bp.js";
import swingJt from "../scenes/swingJt.js";
import jt from "../scenes/jt.js";
export default class Scenes {
    static h13bp(startTime, endTime, titleContent = "", bp1Content = "", bp2Content = "", bp3Content = "", ftNoteContent = "", hslColorNo = 240, bp1EntryTime = 0, bp2EntryTime = 0, bp3EntryTime = 0, ftNoteEntryTime = 0, bp1Y = 35, bp2Y = 55, bp3Y = 75) {
        return h13bp(startTime, endTime, titleContent, bp1Content, bp2Content, bp3Content, ftNoteContent, hslColorNo, bp1EntryTime, bp2EntryTime, bp3EntryTime, ftNoteEntryTime, bp1Y, bp2Y, bp3Y);
    }
    static swingJt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
        return swingJt(startTime, endTime, content, hslColorNo);
    }
    static jt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
        return jt(startTime, endTime, content, hslColorNo);
    }
}
