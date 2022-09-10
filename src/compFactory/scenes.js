import h13bp from "../scenes/h13bp.js";
import swingJt from "../scenes/swingJt.js";
import jt from "../scenes/jt.js";
import fourSq from "../scenes/fourSq.js";
import sixSq from "../scenes/sixSq.js";
import eightSq from "../scenes/eightSq.js";
import twoSqVer from "../scenes/twoSqVer.js";
import twoSqHor from "../scenes/twoSqHor.js";
import canvasBorder from "../scenes/canvasBorder.js";
import { hsl } from "../bilza.js";
export default class Scenes {
    static h13bp(startTime, endTime, titleContent = "", bp1Content = "", bp2Content = "", bp3Content = "", ftNoteContent = "", hslColorNo = 240, bp1EntryTime = 0, bp2EntryTime = 0, bp3EntryTime = 0, ftNoteEntryTime = 0, titleY = 5, bp1Y = 35, bp2Y = 55, bp3Y = 75) {
        return h13bp(startTime, endTime, titleContent, bp1Content, bp2Content, bp3Content, ftNoteContent, hslColorNo, bp1EntryTime, bp2EntryTime, bp3EntryTime, ftNoteEntryTime, titleY, bp1Y, bp2Y, bp3Y);
    }
    static swingJt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
        return swingJt(startTime, endTime, content, hslColorNo);
    }
    static jt(startTime, endTime, content = "Welcome To Bilza.js", hslColorNo = 0) {
        return jt(startTime, endTime, content, hslColorNo);
    }
    static twoSqVer(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
        return twoSqVer(startTime, endTime, colorSq1, colorSq2);
    }
    static twoSqHor(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120)) {
        return twoSqHor(startTime, endTime, colorSq1, colorSq2);
    }
    static fourSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(300)) {
        return fourSq(startTime, endTime, colorSq1, colorSq2, colorSq3, colorSq4);
    }
    static sixSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(300), colorSq6 = hsl(180)) {
        return sixSq(startTime, endTime, colorSq1, colorSq2, colorSq3, colorSq4, colorSq5, colorSq6);
    }
    static eightSq(startTime, endTime, colorSq1 = hsl(0), colorSq2 = hsl(120), colorSq3 = hsl(240), colorSq4 = hsl(60), colorSq5 = hsl(300), colorSq6 = hsl(180), colorSq7 = hsl(0), colorSq8 = hsl(250)) {
        return eightSq(startTime, endTime, colorSq1, colorSq2, colorSq3, colorSq4, colorSq5, colorSq6, colorSq7, colorSq8);
    }
    static canvasBorder(startTime, endTime, color = hsl(0), borderWidth = 5) {
        return canvasBorder(startTime, endTime, color, borderWidth);
    }
}
