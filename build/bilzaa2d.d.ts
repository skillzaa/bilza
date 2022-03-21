declare module "bilzaa2d/component/component" {
    import { Style, Pack, IDrawable, DrawLayer, Transition, IFrameStart } from "index";
    export default class Component<T extends IFrameStart> implements IDrawable {
        protected compData: Transition<T>;
        d: T;
        data: T;
        readonly id: string;
        drawLayer: DrawLayer;
        protected display: boolean;
        protected selected: boolean;
        protected msStart: number;
        protected msEnd: number;
        style: Style;
        constructor(DataFn: () => T, msStart?: number, msEnd?: number);
        getSelected(): boolean;
        setSelected(b: boolean): boolean;
        getDisplay(): boolean;
        setDisplay(b: boolean): boolean;
        getStart(): number;
        setStart(n?: number): number;
        getEnd(): number;
        setEnd(n?: number): number;
        width(p: Pack): number;
        height(p: Pack): number;
        draw(p: Pack): boolean;
        update(msDelta: number, p: Pack): boolean;
        addTransition(msStart: number): T;
        checkCollision(x: number, y: number, p: Pack): boolean;
    }
}
declare module "bilzaa2d/pack/lineCapStyle" {
    export enum LineCapStyle {
        Round = "round",
        Butt = "butt",
        Square = "square"
    }
}
declare module "util/fontNames" {
    export enum FontNames {
        Arial = "Arial",
        ArialBlack = "Arial Black",
        Verdana = "Verdana",
        Tahoma = "Tahoma",
        Impact = "Impact",
        Times = "Times",
        Helvetica = "Helvetica",
        TimesNewRoman = "Times New Roman",
        Didot = "Didot",
        Calibri = "Calibri",
        Georgia = "Georgia",
        AmericanTypewriter = "American Typewriter",
        Courier = "Courier",
        CourierNew = "Courier New",
        LucidaConsole = "Lucida Console",
        Monaco = "Monaco",
        BradleyHand = "Bradley Hand",
        BrushScriptMT = "Brush Script MT",
        BrushScript = "Brush Script",
        Luminari = "Luminari"
    }
}
declare module "bilzaa2d/pack/style" {
    import { LineCapStyle } from "bilzaa2d/pack/lineCapStyle";
    import { FontNames } from "util/fontNames";
    export default class Style {
        frameStart: number;
        fontSize: number;
        fontName: FontNames;
        fillStyle: string;
        strokeStyle: string;
        lineWidth: number;
        shadowColor: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        shadowBlur: number;
        globalAlpha: number;
        lineDashWidth: number;
        lineDashGap: number;
        lineCap: LineCapStyle;
        constructor(frameStart?: number);
        merge(incom: Style): void;
    }
}
declare module "bilzaa2d/design/alignment" {
    export enum XAlignment {
        Left = "LEFT",
        Right = "RIGHT",
        Mid = "MID",
        Off = "OFF"
    }
    export enum YAlignment {
        Top = "TOP",
        Mid = "MID",
        Bottom = "BOTTOM",
        Off = "OFF"
    }
}
declare module "bilzaa2d/design/Position" {
    import { XAlignment, YAlignment } from "bilzaa2d/design/alignment";
    export default class Position {
        x: number;
        y: number;
        xAlignment: XAlignment;
        yAlignment: YAlignment;
        constructor(x?: number, y?: number);
    }
}
declare module "bilzaa2d/pack/pack" {
    import Style from "bilzaa2d/pack/style";
    import Position from "bilzaa2d/design/Position";
    export default class Pack {
        canvas: HTMLCanvasElement;
        ctx: CanvasRenderingContext2D;
        constructor(width?: number, height?: number, canvasId?: string);
        drawBackground(color?: string): void;
        canvasWidth(): number;
        canvasHeight(): number;
        quadraticCurveTo(start: Position, end: Position, controlPoint: Position, style: Style): void;
        restore(): void;
        save(): void;
        clearCanvas(): void;
        charsWidth(chars: string | undefined, fontSize: number, fontName: string): number;
        textWidth(chars: string, incomTempl: Style): number;
        drawLine(startX: number, startY: number, endX: number, endY: number, incomTempl: Style): void;
        line(startX: number, startY: number, endX: number, endY: number): void;
        beginPath(): void;
        closePath(): void;
        moveTo(pos: Position): void;
        lineTo(x: number, y: number, style: Style): void;
        fill(style: Style): void;
        stroke(): void;
        drawRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
        drawFillRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
        arcTo(start: Position, end: Position, style: Style, radius?: number): void;
        drawCircle(x: number, y: number, radius: number, fill: boolean, incomCtx: Style, startAngle?: number, endAngle?: number): void;
        drawText(content: string, x: number, y: number, incomCtx: Style): void;
        drawIcon(code: number, x: number, y: number, incomCtx: Style): void;
        drawTextstroke(content: string, x: number, y: number, incomCtx: Style): void;
        drawLines(positions: Position[], incomCtx: Style, fill?: boolean): void;
        private commitCtxData;
        private setFont;
        xPerc(perc: number): number;
        yPerc(perc: number): number;
        private setBwZeroNhundred;
    }
}
declare module "bilzaa2d/background" {
    export default class Background {
        color: string;
        constructor();
    }
}
declare module "components/text/DataFn" {
    import { FontNames } from "index";
    export class ObjectData {
        frameStart: number;
        x: number;
        y: number;
        content: string;
        widthMargin: number;
        widthBorder: number;
        widthPadding: number;
        flagDrawMargin: boolean;
        flagDrawBorder: boolean;
        flagDrawPadding: boolean;
        flagDrawContentArea: boolean;
        flagDrawBoundingRectangle: boolean;
        flagDrawText: boolean;
        colorMargin: string;
        colorBorder: string;
        colorPadding: string;
        colorContentBg: string;
        fontColor: string;
        fontSize: number;
        fontFamily: FontNames;
        constructor();
    }
    export default function DataFn(): ObjectData;
    export class CalcData {
        marginX: number;
        marginY: number;
        borderX: number;
        borderY: number;
        paddingX: number;
        paddingY: number;
        contentAreaX: number;
        contentAreaY: number;
        contentWidth: number;
        contentHeight: number;
        constructor();
    }
}
declare module "components/text/text" {
    import { Component, Pack, FontNames } from "index";
    import { ObjectData, CalcData } from "components/text/DataFn";
    export default class Text extends Component<ObjectData> {
        protected calcData: CalcData;
        fontFamilyNames: typeof FontNames;
        constructor(content?: string, fontColor?: string, msStart?: number, msEnd?: number, x?: number, y?: number);
        width(p: Pack): number;
        height(p: Pack, perc?: number): number;
        update(ms: number, p: Pack): boolean;
        draw(p: Pack): boolean;
        drawContentArea(p: Pack): void;
        drawText(p: Pack): void;
        contentHeight(p: Pack, perc?: number): number;
        contentWidth(p: Pack): number;
        drawPadding(p: Pack): void;
        drawBorder(p: Pack): void;
        drawMargin(p: Pack): void;
        drawBoundingRectangle(p: Pack, color?: string, lineWidth?: number): void;
        checkCollision(x: number, y: number, p: Pack): boolean;
    }
}
declare module "components/grid/DataFn" {
    export class ObjectData {
        frameStart: number;
        cellWidth: number;
        cellHeight: number;
        colorHorizontalLines: string;
        colorVerticalLines: string;
        colorNumbers: string;
        flagDrawNumbers: boolean;
        flagDrawHorizontal: boolean;
        flagDrawVertical: boolean;
        constructor();
    }
    export default function DataFn(): ObjectData;
}
declare module "components/grid/grid" {
    import { Component, Pack } from "index";
    import { ObjectData } from "components/grid/DataFn";
    export default class Grid extends Component<ObjectData> {
        constructor(msStart?: number, msEnd?: number);
        draw(p: Pack): boolean;
        draw_horizontal(p: Pack): void;
        draw_vertical(p: Pack): void;
    }
}
declare module "components/frameCounter/DataFn" {
    export class ObjectData {
        frameStart: number;
        fontSize: number;
        frame: number;
        x: number;
        y: number;
        content: string;
        padding: number;
        colorRectangle: string;
        colorNumbers: string;
        constructor();
    }
    export default function DataFn(): ObjectData;
}
declare module "components/frameCounter/frameCounter" {
    import { Component, Pack } from "index";
    import { ObjectData } from "components/frameCounter/DataFn";
    export default class FrameCounter extends Component<ObjectData> {
        constructor(msStart?: number, msEnd?: number);
        width(p: Pack): number;
        height(p: Pack): number;
        update(msDelat: number, p: Pack): boolean;
        draw(p: Pack): boolean;
    }
}
declare module "components/circle/DataFn" {
    export class ObjectData {
        frameStart: number;
        x: number;
        y: number;
        startAngle: number;
        endAngle: number;
        radius: number;
        fill: boolean;
        constructor();
    }
    export default function DataFn(): ObjectData;
}
declare module "components/circle/circle" {
    import { Component, Pack } from "index";
    import { ObjectData } from "components/circle/DataFn";
    export default class Circle extends Component<ObjectData> {
        constructor();
        width(p: Pack): number;
        height(p: Pack): number;
        draw(p: Pack): boolean;
    }
}
declare module "components/randomBgShapes/DataFn" {
    export class ObjectData {
        frameStart: number;
        count: number;
        constructor();
    }
    export default function DataFn(): ObjectData;
}
declare module "components/randomBgShapes/randomBgShapes" {
    import { Component, Pack } from "index";
    import { ObjectData } from "components/randomBgShapes/DataFn";
    export default class RandomBgShapes extends Component<ObjectData> {
        constructor();
        width(p: Pack): number;
        height(p: Pack): number;
        draw(p: Pack): boolean;
    }
}
declare module "bilzaa2d/addFacade/addTextTemplates" {
    import { IDrawable } from "index";
    import Text from "components/text/text";
    export default class AddTextTemplates {
        private addToArray;
        constructor(comps: IDrawable[]);
        txt(content?: string, textColor?: string, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
        txtBg(content?: string, textColor?: string, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
    }
}
declare module "bilzaa2d/addFacade/addFacade" {
    import { IDrawable } from "index";
    import Text from "components/text/text";
    import Grid from "components/grid/grid";
    import AddTextTemplates from "bilzaa2d/addFacade/addTextTemplates";
    export default class AddFacade {
        private addToArray;
        textTempl: AddTextTemplates;
        constructor(comps: IDrawable[]);
        text(content?: string, fontColor?: string, msStart?: number, msEnd?: number, x?: number, y?: number): Text;
        grid(msStart?: number, msEnd?: number): Grid;
        frameCounter(x?: number, y?: number, msEnd?: number): void;
        circle(x?: number, y?: number): void;
        randomBgShapes(): void;
    }
}
declare module "bilzaa2d/component/compActions" {
    import { IDrawable, Pack } from "index";
    export default class CompActions {
        arr: IDrawable[];
        p: Pack;
        constructor(arr: IDrawable[], p: Pack);
        chqCollision(x: number, y: number): IDrawable | null;
    }
}
declare module "bilzaa2d/bilzaa2d" {
    import { IDrawable } from "index";
    import Background from "bilzaa2d/background";
    import AddFacade from "bilzaa2d/addFacade/addFacade";
    export default class Bilzaa2d {
        private comps;
        private pack;
        private compActions;
        private interval;
        private canvasId;
        private msPerFrame;
        private timeStart;
        private timeEnd;
        add: AddFacade;
        background: Background;
        constructor(canvasId?: string, canvasWidth?: number, canvasHeight?: number, timeEnd?: number);
        setCanvas(width?: number, height?: number): void;
        getCanvasHeight(): () => number;
        getCanvasWidth(): () => number;
        draw(): boolean;
        private drawByDrawLayer;
        chqCollision(x: number, y: number): IDrawable | null;
        insert(comp: IDrawable): IDrawable;
        private getMsDelta;
        start(): boolean;
        stop(): void;
    }
}
declare module "bilzaa2d/design/drawLayer" {
    export enum DrawLayer {
        BackGround = "BACKGROUND",
        MiddleGround = "MIDDLEGROUND",
        ForeGround = "FOREGROUND"
    }
}
declare module "bilzaa2d/design/IDrawable" {
    import Pack from "bilzaa2d/pack/pack";
    import { DrawLayer } from "bilzaa2d/design/drawLayer";
    export default interface IDrawable {
        drawLayer: DrawLayer;
        getSelected(): boolean;
        setSelected(b: boolean): boolean;
        getDisplay(): boolean;
        setDisplay(b: boolean): boolean;
        getStart(): number;
        setStart(n: number): number;
        getEnd(): number;
        setEnd(n: number): number;
        width(p: Pack): number;
        height(p: Pack): number;
        update(ms: number, p: Pack): boolean;
        draw(p: Pack): boolean;
        checkCollision(x: number, y: number, p: Pack): boolean;
    }
}
declare module "transition/IFrameStart" {
    export default interface IFrameStart {
        frameStart: number;
    }
}
declare module "transition/transition" {
    import IFrameStart from "transition/IFrameStart";
    export default class Transition<T extends IFrameStart> {
        private newDataObjFn;
        data: T;
        private transitions;
        constructor(newDataObjFn: () => T);
        add(frameStart: number): T;
        insert(f: T): T;
        apply(frame: number): void;
        private merge;
    }
}
declare module "index" {
    import Component from "bilzaa2d/component/component";
    import Pack from "bilzaa2d/pack/pack";
    import Style from "bilzaa2d/pack/style";
    import Bilzaa2d from "bilzaa2d/bilzaa2d";
    import Position from "bilzaa2d/design/Position";
    import { DrawLayer } from "bilzaa2d/design/drawLayer";
    import IDrawable from "bilzaa2d/design/IDrawable";
    import Transition from "transition/transition";
    import { FontNames } from "util/fontNames";
    import IFrameStart from "transition/IFrameStart";
    export { Bilzaa2d, Pack, DrawLayer, Style, Transition, Component, IFrameStart, Position, IDrawable, FontNames, };
}
declare module "components/icon/utfIcons" {
    export enum UTFIcons {
        CrossSword = 9876,
        Danger = 9760,
        TeaCup = 9749,
        Heart = 9829,
        FleurDeLis = 9884,
        CheckMark = 10003,
        BallotX = 10007,
        HeavyCheckMark = 10004,
        YinYang = 9775
    }
}
declare module "examples/example001" { }
declare module "transition/example" { }
//# sourceMappingURL=bilzaa2d.d.ts.map