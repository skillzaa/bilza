import { hsl } from "../bilza.js";
import jt from "../scenes/jt.js";
import swingJt from "../scenes/swingJt.js";
import twoSqHor from "../scenes/twoSqHor.js";
import twoSqVer from "../scenes/twoSqVer.js";
import fourSq from "../scenes/fourSq.js";
import eightSq from "../scenes/eightSq.js";
import sixSq from "../scenes/sixSq.js";
import hdg3bp from "../scenes/hdg3bp.js";
import hdg2bp from "../scenes/hdg2bp.js";
import hdg1bp from "../scenes/hdg1bp.js";
export default class Scenes {
    static eightSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(0), colorSq6 = hsl(180), colorSq7 = hsl(0), colorSq8 = hsl(100)) {
        const s = eightSq(startTime, endTime, colorSq1, colorSq2, colorSq3, colorSq4, colorSq5, colorSq6, colorSq7, colorSq8);
        return s;
    }
    static sixSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(0), colorSq6 = hsl(180)) {
        const s = sixSq(startTime, endTime, colorSq1, colorSq2, colorSq3, colorSq4, colorSq5, colorSq6);
        return s;
    }
    static fourSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(300)) {
        const s = fourSq(startTime, endTime, colorSq1, colorSq2, colorSq3, colorSq4);
        return s;
    }
    static twoSqHor(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
        const s = twoSqHor(startTime, endTime, colorSq1, colorSq2);
        return s;
    }
    static twoSqVer(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
        const s = twoSqVer(startTime, endTime, colorSq1, colorSq2);
        return s;
    }
    static swingJt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
        const s = swingJt(startTime, endTime, content, hslColorNo);
        return s;
    }
    static jt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
        const s = jt(startTime, endTime, content, hslColorNo);
        return s;
    }
    static hdg3bp(startTime, endTime, hslColorNo = 240, titleContent = "", bp1Content = "", bp1EntryTime = 0, bp2Content = "", bp2EntryTime = 0, bp3Content = "", bp3EntryTime = 0, ftNoteContent = "", ftNoteEntryTime = 0, titleY = 5) {
        const s = hdg3bp(startTime, endTime, hslColorNo, titleContent, bp1Content, bp1EntryTime, bp2Content, bp2EntryTime, bp3Content, bp3EntryTime, ftNoteContent, ftNoteEntryTime, titleY);
        return s;
    }
    static hdg2bp(startTime, endTime, hslColorNo = 240, titleContent = "", bp1Content = "", bp1EntryTime = 0, bp2Content = "", bp2EntryTime = 0, ftNoteContent = "", ftNoteEntryTime = 0, titleY = 5) {
        const s = hdg2bp(startTime, endTime, hslColorNo, titleContent, bp1Content, bp1EntryTime, bp2Content, bp2EntryTime, ftNoteContent, ftNoteEntryTime, titleY);
        return s;
    }
    static hdg1bp(startTime, endTime, hslColorNo = 240, titleContent = "", bp1Content = "", bp1EntryTime = 0, ftNoteContent = "", ftNoteEntryTime = 0, titleY = 5) {
        const s = hdg1bp(startTime, endTime, hslColorNo, titleContent, bp1Content, bp1EntryTime, ftNoteContent, ftNoteEntryTime, titleY);
        return s;
    }
}
