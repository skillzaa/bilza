import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import LineSegDb from "./lineSegDb.js";
import Vertex from "./vertex.js";
export default class LineSeg extends CompEngine {
    protected filled: boolean;
    protected closed: boolean;
    protected startX: number;
    protected startY: number;
    data: Vertex[];
    constructor(lineSegDb: LineSegDb, pack: Pack);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=lineSeg.d.ts.map