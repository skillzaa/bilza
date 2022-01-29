import { Actions } from "./actions.js";
import { instrType } from "./instrType.js";
export default class DrawInstr {
    constructor() {
        this.action = Actions.DrawText;
        this.width = 0;
        this.codePoint = 127799;
        this.height = 0;
        this.content = "";
        this.instrType = instrType.Gen;
        this.fontSize = 100;
        this.fillStyle = "#1e1eea";
        this.strokeStyle = "#1e1eea";
    }
}
