import { Cornor } from "../design/cornor.js";
export default class Location {
    cornor: Cornor;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number | undefined, y: number | undefined, width: number, height: number, cornor: Cornor);
    X(xPercent: number, cornor: Cornor, width: number): void;
    Y(xPercent: number, cornor: Cornor, width: number): void;
}
//# sourceMappingURL=location.d.ts.map