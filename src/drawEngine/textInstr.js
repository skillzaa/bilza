import DrawInstr from "./drawInstr.js";
export default function textInstr(content = "a", width = 0, height = 0) {
    let instr = new DrawInstr();
    instr.content = content;
    instr.width = width;
    instr.height = height;
    return instr;
}
