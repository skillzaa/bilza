import IComponent from "../componentFacade/IComponent.js";
export default interface IComponentPack {
    startTime: number;
    endTime: number;
    canvasWidth: number;
    canvasHeight: number;
    charsWidth: (chars: string, fontSize: number, fontName: string) => number;
    init(compDb: IComponent): void;
}
//# sourceMappingURL=IComponentPack.d.ts.map