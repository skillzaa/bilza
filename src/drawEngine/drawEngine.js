import DrawState from "./drawState.js";
import { Actions } from "./actions.js";
export default class DrawEngine {
    constructor(instr = []) {
        this.state = new DrawState();
        this.instr = instr;
    }
    draw(startingX = 100) {
        let x = startingX;
        for (let i = 0; i < this.instr.length; i++) {
            const instr = this.instr[i];
            switch (instr.action) {
                case Actions.DrawText:
                    this.state.drawText(instr, x, 100);
                    x += this.state.chars_width(instr.content, instr.fontSize);
                    break;
                case Actions.DrawSpecialChar:
                    this.state.drawSpecialChar(instr, x, 100);
                    x += this.state.chars_width(instr.content, instr.fontSize);
                    break;
                case Actions.Drawline:
                    break;
                default:
                    break;
            }
        }
    }
}
