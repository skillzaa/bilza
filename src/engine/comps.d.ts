import { IComponent, Pack } from "../Bilza.js";
export default class Comps {
    compsArray: IComponent[];
    private pack;
    constructor(pack: Pack);
    init(): boolean;
    resizeAll(width?: number, height?: number): boolean;
}
//# sourceMappingURL=comps.d.ts.map