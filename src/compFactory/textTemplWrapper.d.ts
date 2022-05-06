import { IComponent } from "../Bilza.js";
import Text from "../components/text/text.js";
export default class TextTemplWrapper {
    private insert;
    private tt;
    constructor(insert: (comp: IComponent) => IComponent);
    h1(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    jt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    lb(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    lm(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    lt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    mt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    mm(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    mb(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    rb(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    rm(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    rt(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string): Text;
    bulletPointMid(startTimeSeconds?: number, endTimeSeconds?: number, content?: string, colorHax?: string, y?: number): Text;
}
//# sourceMappingURL=textTemplWrapper.d.ts.map