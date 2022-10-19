import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import IPic from "./IPic.js";
import Pack from "../../pack/pack.js";
import Linker from "../../facade/linker.js";
export default class PicDb extends CompDb implements IPic {
    readonly img: HTMLImageElement;
    readonly orignalWidth: number;
    readonly orignalHeight: number;
    constructor(linker: Linker, imgUrl: string, width?: number, height?: number);
    getEngineComp(pack: Pack): compEngine;
}
//# sourceMappingURL=picDb.d.ts.map