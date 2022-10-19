import Scene from "./scene.js";
export default class Scenes {
    scene: Scene;
    constructor(scene: Scene);
    eightSq(colorSq1?: string, colorSq2?: string, colorSq3?: string, colorSq4?: string, colorSq5?: string, colorSq6?: string, colorSq7?: string, colorSq8?: string): void;
    sixSq(colorSq1?: string, colorSq2?: string, colorSq3?: string, colorSq4?: string, colorSq5?: string, colorSq6?: string): void;
    fourSq(colorSq1?: string, colorSq2?: string, colorSq3?: string, colorSq4?: string): void;
    twoSqHor(colorSq1?: string, colorSq2?: string): void;
    twoSqVer(colorSq1?: string, colorSq2?: string): void;
    swingJt(content?: string, hslColorNo?: number): void;
    jt(content?: string, hslColorNo?: number): void;
    hdg3bp(hslColorNo?: number, titleContent?: string, bp1Content?: string, bp1EntryTime?: number, bp2Content?: string, bp2EntryTime?: number, bp3Content?: string, bp3EntryTime?: number, ftNoteContent?: string, ftNoteEntryTime?: number, titleY?: number): void;
    hdg2bp(hslColorNo?: number, titleContent?: string, bp1Content?: string, bp1EntryTime?: number, bp2Content?: string, bp2EntryTime?: number, ftNoteContent?: string, ftNoteEntryTime?: number, titleY?: number): void;
    hdg1bp(hslColorNo?: number, titleContent?: string, bp1Content?: string, bp1EntryTime?: number, ftNoteContent?: string, ftNoteEntryTime?: number, titleY?: number): void;
}
//# sourceMappingURL=scenes.d.ts.map