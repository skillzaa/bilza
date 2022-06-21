export default class CompFactory {
    static pic(imgId: string, dynWidth?: number, dynHeight?: number): any;
    static staticGrid(cellWidth: number | undefined, cellHeight: number | undefined, color: string): any;
    static grid(colorHax?: string, cellWidthPerc?: number, cellHeightPerc?: number): any;
    static rect(color?: string): any;
    static fillRect(color?: string): any;
    static frameCounter(color?: string): any;
    static bgCircles(count?: number, color?: string, delay?: number): any;
    static text(content?: string, colorHax?: string): any;
}
//# sourceMappingURL=compFactory.d.ts.map