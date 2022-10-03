export default interface ICompDb {
    align(x: 0 | 1 | 2 | null, y: 0 | 1 | 2 | null): void;
    alignRotate(x: 0 | 1 | 2 | null, y: 0 | 1 | 2 | null): void;
    compWidth(): number;
    compWidthPix(): number;
    compHeight(): number;
    compHeightPix(): number;
    contentWidth(): number;
    contentWidthPix(): number;
    contentHeight(): number;
    contentHeightPix(): number;
    getDuration(): number;
    getStartTime(inMilliSec?: boolean): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(secFrom: number, secTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=ICompDb.d.ts.map