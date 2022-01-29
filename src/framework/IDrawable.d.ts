import State from "./state.js";
export default interface IDrawable {
    width(state: State): number;
    height(state: State): number;
    draw(state: State, x: number, y: number): boolean;
}
//# sourceMappingURL=IDrawable.d.ts.map