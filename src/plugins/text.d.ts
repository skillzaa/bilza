import State from "../framework/state.js";
import Plugin from "../plugin/plugin.js";
export default class Text extends Plugin {
    content: string;
    constructor(content: string);
    width(state: State): number;
    height(state: State): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=text.d.ts.map