import State from "../pack/pack.js";
import Plugin from "../component/component.js";
export default class Text extends Plugin {
    content: string;
    constructor(content: string);
    width(state: State): number;
    height(state: State): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=text.d.ts.map