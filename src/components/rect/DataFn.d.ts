import BaseProps from "../../BaseComponent/BaseProps";
import IProps from "../../design/IProps.js";
export interface IRect extends IProps {
}
export default class ObjectData extends BaseProps implements IRect {
    widthPercent: number;
    heightPercent: number;
    lineWidth: number;
    color: string;
    constructor();
}
//# sourceMappingURL=DataFn.d.ts.map