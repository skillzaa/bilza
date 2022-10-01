import Scene from "./scene.js";
export default class Scenes {
    static eightSq(startTime: number, endTime: number, colorSq1?: string, colorSq2?: string, colorSq3?: string, colorSq4?: string, colorSq5?: string, colorSq6?: string, colorSq7?: string, colorSq8?: string): Scene;
    static sixSq(startTime: number, endTime: number, colorSq1?: string, colorSq2?: string, colorSq3?: string, colorSq4?: string, colorSq5?: string, colorSq6?: string): Scene;
    static fourSq(startTime: number, endTime: number, colorSq1?: string, colorSq2?: string, colorSq3?: string, colorSq4?: string): Scene;
    static twoSqHor(startTime: number, endTime: number, colorSq1?: string, colorSq2?: string): Scene;
    static twoSqVer(startTime: number, endTime: number, colorSq1?: string, colorSq2?: string): Scene;
    static swingJt(startTime: number, endTime: number, content?: string, hslColorNo?: number): Scene;
    static jt(startTime: number, endTime: number, content?: string, hslColorNo?: number): Scene;
    static hdg3bp(startTime: number, endTime: number, hslColorNo?: number, titleContent?: string, bp1Content?: string, bp1EntryTime?: number, bp2Content?: string, bp2EntryTime?: number, bp3Content?: string, bp3EntryTime?: number, ftNoteContent?: string, ftNoteEntryTime?: number, titleY?: number): Scene;
    static hdg2bp(startTime: number, endTime: number, hslColorNo?: number, titleContent?: string, bp1Content?: string, bp1EntryTime?: number, bp2Content?: string, bp2EntryTime?: number, ftNoteContent?: string, ftNoteEntryTime?: number, titleY?: number): Scene;
    static hdg1bp(startTime: number, endTime: number, hslColorNo?: number, titleContent?: string, bp1Content?: string, bp1EntryTime?: number, ftNoteContent?: string, ftNoteEntryTime?: number, titleY?: number): Scene;
}
//# sourceMappingURL=scenes.d.ts.map