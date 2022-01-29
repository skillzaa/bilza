import State from "../pack/pack.js";
import Plugin from "../component/component.js";
export default class SS extends Plugin {
    content: string;
    power: string;
    constructor(content?: string, power?: string);
    width(state: State): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=ss.d.ts.map