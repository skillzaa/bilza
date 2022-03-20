//--This is an Abstract class
class Component {
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    constructor(DataFn, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        //--------------------------------
        //--must
        this.drawLayer = DrawLayer.MiddleGround;
        //--must
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.display = true;
        this.selected = false;
        this.msStart = msStart; //typescript deamnds it
        this.msEnd = msEnd;
        this.setStart(msStart); //in future i may run some otehr code in these fn
        this.setEnd(msEnd);
    }
    getSelected() {
        return this.selected;
    }
    setSelected(b) {
        this.selected = b;
        return this.selected;
    }
    getDisplay() {
        return this.display;
    }
    setDisplay(b) {
        this.display = b;
        return this.display;
    }
    getStart() {
        return this.msStart;
    }
    setStart(n = 0) {
        this.msStart = n;
        return n;
    }
    getEnd() {
        return this.msEnd;
    }
    setEnd(n = Number.MAX_SAFE_INTEGER) {
        this.msEnd = n;
        return n;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    // brilent do not send frame in draw args just send frame in update-
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        return true;
    }
    ////////////////////////////////////////////////////////
    // following methods are not IDrawable
    addTransition(msStart) {
        return this.compData.add(msStart);
    }
    checkCollision(x, y, p) {
        return false;
    }
} //component ends

class Pack {
    constructor(width = 0, height = 0, canvasId = "bilzaa2d") {
        let lookForCanvas = document.getElementById(canvasId);
        if (lookForCanvas == null) {
            this.canvas = document.createElement('canvas');
            let body = document.getElementsByTagName("body")[0];
            body.appendChild(this.canvas);
        }
        else {
            this.canvas = lookForCanvas;
        }
        this.canvas.id = canvasId; // Html5 canvas does not have id
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.position = "static";
        this.canvas.style.border = "1px solid blue";
        if (this.canvas == null) {
            throw new Error("canvas not found");
        }
        if (width == 0) {
            this.canvas.width = window.innerWidth;
        }
        else {
            this.canvas.width = width;
        }
        if (height == 0) {
            this.canvas.height = window.innerHeight;
        }
        else {
            this.canvas.height = height;
        }
        //===========================
        this.ctx = this.canvas.getContext('2d');
        if (this.ctx == null) {
            throw new Error("could not obtain drawing context");
        }
    }
    //--- look at this fn again
    drawBackground(color = "blue") {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    canvasWidth() {
        return this.canvas.width;
    }
    canvasHeight() {
        return this.canvas.height;
    }
    quadraticCurveTo(start, end, controlPoint, style) {
        this.commitCtxData(style);
        this.beginPath();
        this.moveTo(start);
        this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, end.x, end.y);
        this.stroke();
    }
    restore() {
        this.ctx.restore();
    }
    save() {
        this.ctx.save();
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    charsWidth(chars = "", fontSize, fontName) {
        this.ctx.save();
        //--no commitCtxData thus setFont is required
        this.setFont(fontSize, fontName);
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    textWidth(chars, incomTempl) {
        this.ctx.save();
        this.commitCtxData(incomTempl);
        //not required since its done in commitCtxData
        // this.setFont(incomTempl.fontSize,incomTempl.fontName);
        let m = this.ctx.measureText(chars).width;
        this.ctx.restore();
        return Math.ceil(m);
    }
    drawLine(startX, startY, endX, endY, incomTempl) {
        this.commitCtxData(incomTempl);
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    line(startX, startY, endX, endY) {
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
    }
    beginPath() {
        this.ctx.beginPath();
    }
    closePath() {
        this.ctx.closePath();
    }
    moveTo(pos) {
        this.ctx.moveTo(pos.x, pos.y);
    }
    lineTo(x, y, style) {
        this.commitCtxData(style);
        this.ctx.lineTo(x, y);
    }
    fill(style) {
        this.commitCtxData(style);
        this.ctx.fill();
    }
    stroke() {
        this.ctx.stroke();
    }
    drawRect(x, y, width, height, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.rect(x, y, width, height);
        this.ctx.stroke();
    }
    drawFillRect(x, y, width, height, incomCtx) {
        this.commitCtxData(incomCtx);
        this.ctx.fillRect(x, y, width, height);
    }
    arcTo(start, end, style, radius = 20) {
        this.commitCtxData(style);
        this.ctx.arcTo(start.x, start.y, end.x, end.y, radius);
    }
    drawCircle(x, y, radius, fill, incomCtx, startAngle = 0, endAngle = 2 * Math.PI) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.arc(x + radius, y + radius, radius, startAngle, endAngle, false);
        if (fill == true) {
            this.ctx.fill();
        }
        this.ctx.stroke();
    }
    drawText(content, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        //    this.ctx.textBaseline = "middle";
        this.ctx.textBaseline = "top";
        //    this.ctx.textBaseline = "bottom";
        //    this.ctx.font = "200px sans-serif";
        // x and y are not merged place directly   
        this.ctx.fillText(content, x, y);
    }
    drawIcon(code, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged place directly   
        this.ctx.fillText(String.fromCharCode(code), x, y);
    }
    drawTextstroke(content, x, y, incomCtx) {
        this.commitCtxData(incomCtx);
        //--must
        this.ctx.textBaseline = "top";
        // x and y are not merged   
        this.ctx.strokeText(content, x, y);
    }
    //very simple function just do not put abstractions here-- keep it simple and pure 
    drawLines(positions, incomCtx, fill = true) {
        this.commitCtxData(incomCtx);
        this.ctx.beginPath();
        this.ctx.moveTo(positions[0].x, positions[0].y);
        for (let i = 1; i < positions.length; i++) {
            const pos = positions[i];
            this.ctx.lineTo(pos.x, pos.y);
        }
        //--do not draw the last line
        this.ctx.closePath(); //importantay
        if (fill == true) {
            this.ctx.fill();
        }
        else {
            this.ctx.stroke();
        }
    }
    // x and y are not here
    commitCtxData(incomCtx) {
        if (incomCtx.lineCap !== null) {
            this.ctx.lineCap = "round";
        }
        if (incomCtx.globalAlpha !== null) {
            this.ctx.globalAlpha = incomCtx.globalAlpha;
        }
        if (incomCtx.shadowBlur !== null) {
            this.ctx.shadowBlur = incomCtx.shadowBlur;
        }
        if (incomCtx.shadowOffsetY !== null) {
            this.ctx.shadowOffsetY = incomCtx.shadowOffsetY;
        }
        if (incomCtx.shadowOffsetX !== null) {
            this.ctx.shadowOffsetX = incomCtx.shadowOffsetX;
        }
        if (incomCtx.lineWidth !== null) {
            this.ctx.lineWidth = incomCtx.lineWidth;
        }
        if (incomCtx.shadowColor !== null) {
            this.ctx.shadowColor = incomCtx.shadowColor;
        }
        if (incomCtx.strokeStyle !== null) {
            this.ctx.strokeStyle = incomCtx.strokeStyle;
        }
        if (incomCtx.fillStyle !== null) {
            this.ctx.fillStyle = incomCtx.fillStyle;
        }
        if (incomCtx.lineDashWidth !== null && incomCtx.lineDashGap !== null) {
            this.ctx.setLineDash([incomCtx.lineDashWidth, incomCtx.lineDashGap]);
        }
        //---important change
        this.setFont(incomCtx.fontSize, incomCtx.fontName);
    }
    setFont(fontSize, fontName) {
        // let f = fontSize + "px " + fontName;
        let f = `${fontSize}px ${fontName}`;
        // let f = `${fontSize}px fantasy`;
        // let f = "200px Charcoal";
        this.ctx.font = f;
    }
    xPerc(perc) {
        let checked = this.setBwZeroNhundred(perc);
        return ((this.canvas.width / 100) * checked);
    }
    yPerc(perc) {
        let checked = this.setBwZeroNhundred(perc);
        return ((this.canvas.height / 100) * checked);
    }
    setBwZeroNhundred(n) {
        if (n < 0) {
            return 0;
        }
        if (n > 100) {
            return 100;
        }
        return n;
    }
}

var LineCapStyle;
(function (LineCapStyle) {
    LineCapStyle["Round"] = "round";
    LineCapStyle["Butt"] = "butt";
    LineCapStyle["Square"] = "square";
})(LineCapStyle || (LineCapStyle = {}));

var FontNames;
(function (FontNames) {
    FontNames["Arial"] = "Arial";
    FontNames["ArialBlack"] = "Arial Black";
    FontNames["Verdana"] = "Verdana";
    FontNames["Tahoma"] = "Tahoma";
    FontNames["Impact"] = "Impact";
    FontNames["Times"] = "Times";
    FontNames["Helvetica"] = "Helvetica";
    FontNames["TimesNewRoman"] = "Times New Roman";
    FontNames["Didot"] = "Didot";
    FontNames["Calibri"] = "Calibri";
    FontNames["Georgia"] = "Georgia";
    FontNames["AmericanTypewriter"] = "American Typewriter";
    FontNames["Courier"] = "Courier";
    FontNames["CourierNew"] = "Courier New";
    FontNames["LucidaConsole"] = "Lucida Console";
    FontNames["Monaco"] = "Monaco";
    FontNames["BradleyHand"] = "Bradley Hand";
    FontNames["BrushScriptMT"] = "Brush Script MT";
    FontNames["BrushScript"] = "Brush Script";
    FontNames["Luminari"] = "Luminari";
    //----------------------------
})(FontNames || (FontNames = {}));

// these are ctx valuesto be set in caseof any change in ctx
class Style {
    constructor(frameStart = 0) {
        this.frameStart = frameStart;
        // this.font = null; //may not be req
        this.fontSize = 25;
        this.fontName = FontNames.Luminari;
        this.fillStyle = "green";
        this.strokeStyle = "red";
        this.lineWidth = 2;
        this.shadowColor = "black";
        this.shadowOffsetX = 0;
        this.shadowOffsetY = 0;
        this.shadowBlur = 0;
        this.globalAlpha = 1;
        this.lineCap = LineCapStyle.Round;
        this.lineDashWidth = 0;
        this.lineDashGap = 0;
    }
    merge(incom) {
        if (incom.lineCap !== null) {
            this.lineCap = incom.lineCap;
        }
        if (incom.globalAlpha !== null) {
            this.globalAlpha = incom.globalAlpha;
        }
        if (incom.shadowBlur !== null) {
            this.shadowBlur = incom.shadowBlur;
        }
        if (incom.shadowOffsetY !== null) {
            this.shadowOffsetY = incom.shadowOffsetY;
        }
        if (incom.shadowOffsetX !== null) {
            this.shadowOffsetX = incom.shadowOffsetX;
        }
        if (incom.lineWidth !== null) {
            this.lineWidth = incom.lineWidth;
        }
        if (incom.shadowColor !== null) {
            this.shadowColor = incom.shadowColor;
        }
        if (incom.strokeStyle !== null) {
            this.strokeStyle = incom.strokeStyle;
        }
        if (incom.fillStyle !== null) {
            this.fillStyle = incom.fillStyle;
        }
        if (incom.fontSize !== null) {
            this.fontSize = incom.fontSize;
        }
        if (incom.fontName !== null) {
            this.fontName = incom.fontName;
        }
        if (incom.lineDashWidth !== null) {
            this.lineDashWidth = incom.lineDashWidth;
        }
        if (incom.lineDashGap !== null) {
            this.lineDashGap = incom.lineDashGap;
        }
    }
}

class Background {
    constructor() {
        this.color = "#efeee3";
    }
}

class ObjectData$4 {
    constructor() {
        this.frameStart = 0;
        this.x = 50;
        this.y = 50;
        this.content = "text!";
        this.widthMargin = 0;
        this.widthBorder = 0;
        this.widthPadding = 0;
        this.colorMargin = "red";
        this.colorBorder = "green";
        this.colorPadding = "blue";
        this.colorContentBg = "yellow";
        this.fontColor = "black";
        this.fontSize = 32;
        this.fontFamily = FontNames.Courier;
        //-----
        this.flagDrawMargin = false;
        this.flagDrawBorder = false;
        this.flagDrawPadding = false;
        this.flagDrawContentArea = false;
        this.flagDrawBoundingRectangle = false;
        this.flagDrawText = true; // kep this true
    }
}
function DataFn$4() {
    let td = new ObjectData$4();
    return td;
}
class CalcData {
    constructor() {
        this.marginX = 0;
        this.marginY = 0;
        this.borderX = 0;
        this.borderY = 0;
        this.paddingX = 0;
        this.paddingY = 0;
        this.contentAreaX = 0;
        this.contentAreaY = 0;
        //.........
        this.contentWidth = 0;
        this.contentHeight = 0;
    }
}

class Text extends Component {
    constructor(content = "", fontColor = "black", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        super(DataFn$4, msStart, msEnd);
        this.calcData = new CalcData();
        //--Exposes an Enum
        this.fontFamilyNames = FontNames;
        //----get values
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.fontColor = fontColor;
    }
    /////////////////////////////////////////
    /////////////////////////////////////////
    width(p) {
        return ((this.d.widthMargin * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth);
    }
    height(p, perc = 0) {
        return ((this.d.widthMargin * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight);
    }
    update(ms, p) {
        this.compData.apply(ms); //--important!!
        //-----update all variables req for draw-and then just draw
        this.calcData.marginX = this.d.x;
        this.calcData.marginY = this.d.y;
        this.calcData.borderX = this.d.x + this.d.widthMargin;
        this.calcData.borderY = this.d.y + this.d.widthMargin;
        this.calcData.paddingX = this.d.x + this.d.widthMargin + this.d.widthBorder;
        this.calcData.paddingY = this.d.y + this.d.widthMargin + this.d.widthBorder;
        this.calcData.contentAreaX = this.d.x + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
        this.calcData.contentAreaY = this.d.y + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
        //...
        this.calcData.contentWidth = this.contentWidth(p);
        this.calcData.contentHeight = this.contentHeight(p);
        return true;
    }
    draw(p) {
        this.drawMargin(p);
        this.drawBorder(p);
        this.drawPadding(p);
        this.drawContentArea(p);
        this.drawText(p);
        this.drawBoundingRectangle(p);
        console.log("Box system...!!!!!");
        return true;
    }
    drawContentArea(p) {
        if (this.d.flagDrawContentArea == false) {
            return;
        }
        this.style.fillStyle = this.d.colorContentBg;
        p.drawFillRect(this.calcData.contentAreaX, this.calcData.contentAreaY, this.contentWidth(p), this.contentHeight(p), this.style);
    }
    drawText(p) {
        if (this.d.flagDrawText == false) {
            return;
        }
        this.style.fillStyle = this.d.fontColor;
        this.style.fontSize = this.d.fontSize;
        this.style.fontName = this.d.fontFamily;
        p.drawText(this.d.content, this.calcData.contentAreaX, this.calcData.contentAreaY, this.style);
    }
    contentHeight(p, perc = 40) {
        let charHt = p.charsWidth("X", this.d.fontSize, this.d.fontFamily);
        //   console.log("contentHeight",charHt);
        charHt += (charHt / 100 * perc);
        return charHt;
    }
    contentWidth(p) {
        // it is this.d.fontFamily and not this.styleg.fontFamily    
        let r = p.charsWidth(this.d.content, this.d.fontSize, this.d.fontFamily);
        // console.log("content width",r);
        return r;
        // return 50;
    }
    drawPadding(p) {
        if (this.d.flagDrawPadding == false) {
            return;
        }
        this.style.fillStyle = this.d.colorPadding;
        p.drawFillRect(this.calcData.paddingX, this.calcData.paddingY, (this.d.widthPadding * 2) + this.calcData.contentWidth, (this.d.widthPadding * 2) + this.calcData.contentHeight, this.style);
    }
    drawBorder(p) {
        if (this.d.flagDrawBorder == false) {
            return;
        }
        this.style.fillStyle = this.d.colorBorder;
        p.drawFillRect(this.calcData.borderX, this.calcData.borderY, ((this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth), 
        //this.calcData.contentWidth should be contentHeight
        ((this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight), this.style);
    }
    drawMargin(p) {
        //it does not get drawn but is still counted in the calculations
        if (this.d.flagDrawMargin == false) {
            return;
        }
        this.style.fillStyle = this.d.colorMargin;
        this.style.strokeStyle = this.d.colorMargin;
        this.style.lineWidth = this.d.widthMargin;
        p.drawFillRect(this.calcData.marginX, this.calcData.marginY, ((this.d.widthMargin * 2) + (this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth), ((this.d.widthMargin * 2) + (this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight), this.style);
    }
    drawBoundingRectangle(p, color = "red", lineWidth = 4) {
        if (this.d.flagDrawBoundingRectangle == false) {
            return;
        }
        this.style.fillStyle = color; //change later
        this.style.strokeStyle = color; //change later
        this.style.lineWidth = lineWidth; //change later
        p.drawRect(this.d.x, this.d.y, this.width(p), this.height(p), this.style);
    }
    checkCollision(x, y, p) {
        if (x > this.d.x && x < this.width(p)) {
            if (y > this.d.y && y < this.height(p)) {
                return true;
            }
        }
        return false;
    }
}

class ObjectData$3 {
    constructor() {
        this.frameStart = 0;
        // this.x = 0;
        // this.y = 0;
        this.cellWidth = 50;
        this.cellHeight = 50;
        this.colorHorizontalLines = "black";
        this.colorVerticalLines = "black";
        this.colorNumbers = "black";
        this.flagDrawNumbers = false;
        this.flagDrawHorizontal = false;
        this.flagDrawVertical = false;
    }
}
function DataFn$3() {
    let td = new ObjectData$3();
    return td;
}

//import GridTemplates from "./gridTemplates.js";
//export {GridTemplates};
class Grid extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        super(DataFn$3, msStart, msEnd);
        this.drawLayer = DrawLayer.BackGround;
    }
    draw(p) {
        this.draw_horizontal(p);
        this.draw_vertical(p);
        return true;
    }
    draw_horizontal(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        //end y remain the same
        let end_x = x + width;
        do {
            this.style.strokeStyle = this.d.colorHorizontalLines;
            p.drawLine(x, y, end_x, y, this.style);
            if (this.d.flagDrawNumbers == true) {
                this.style.strokeStyle = this.d.colorNumbers;
                p.drawText(y.toString(), x, y, this.style);
            }
            y += this.d.cellHeight;
        } while (height > y);
    }
    draw_vertical(p) {
        let x = 0;
        let y = 0;
        let width = p.canvasWidth();
        let height = p.canvasHeight();
        //end y remain the same
        let end_y = y + height;
        do {
            this.style.strokeStyle = this.d.colorVerticalLines;
            p.drawLine(x, y, x, end_y, this.style);
            if (this.d.flagDrawNumbers == true) {
                this.style.strokeStyle = this.d.colorNumbers;
                p.drawText(x.toString(), x, y, this.style);
            }
            x += this.d.cellWidth;
        } while (width > x);
    }
}
//=============================

class ObjectData$2 {
    constructor() {
        this.frameStart = 0; // i just need it since its req by component
        this.x = 0;
        this.y = 0;
        this.fontSize = 30;
        this.content = "sec: ";
        this.frame = 0;
        this.padding = 4;
        this.colorRectangle = "black";
        this.colorNumbers = "yellow";
    }
}
function DataFn$2() {
    let td = new ObjectData$2();
    return td;
}

class FrameCounter extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        super(DataFn$2, msStart, msEnd);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        this.style.fontSize = this.d.fontSize;
        const thestr = `   ${this.d.content}   ${parseInt(this.d.frame.toString())} `;
        const contentWidth = p.textWidth(thestr, this.style);
        return ((contentWidth + (this.d.padding * 2)) + 10);
    }
    height(p) {
        this.style.fontSize = this.d.fontSize;
        return p.textWidth("Xi", this.style);
    }
    update(msDelat, p) {
        this.d.frame = msDelat / 1000; //to seconds
        return true;
        // return super.update(frame, p);
    }
    draw(p) {
        let s = "Frame:" + parseInt(this.d.frame.toString());
        this.style.fillStyle = this.d.colorRectangle;
        p.drawFillRect(this.d.x, this.d.y, this.width(p) + this.d.padding, this.height(p) + this.d.padding, this.style);
        this.style.fillStyle = this.d.colorNumbers;
        p.drawText(s, this.d.x + (this.d.padding), this.d.y + (this.d.padding), this.style);
        return true;
    }
}

class ObjectData$1 {
    constructor() {
        this.frameStart = 0;
        this.x = 0;
        this.y = 0;
        this.startAngle = 0;
        this.endAngle = 2 * Math.PI;
        this.radius = 100;
        this.fill = true;
    }
}
function DataFn$1() {
    let td = new ObjectData$1();
    return td;
}

class Circle extends Component {
    constructor() {
        super(DataFn$1);
    }
    width(p) {
        return this.d.radius * 2;
    }
    height(p) {
        return this.d.radius * 2;
    }
    draw(p) {
        if (this.d.startAngle >= 7) {
            this.d.startAngle = 0;
        }
        else {
            this.d.startAngle++;
        }
        p.drawCircle(this.d.x, this.d.y, this.d.radius, this.d.fill, this.style, this.d.startAngle);
        return true;
    }
}

class ObjectData {
    constructor() {
        this.frameStart = 0;
        this.count = 200;
    }
}
function DataFn() {
    let td = new ObjectData();
    return td;
}

class RandomBgShapes extends Component {
    constructor() {
        super(DataFn);
        this.drawLayer = DrawLayer.BackGround;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        this.style.fillStyle = "#f2edba";
        this.style.strokeStyle = "#efeee3";
        for (let i = 0; i < this.d.count; i++) {
            p.drawCircle((Math.ceil(Math.random() * 1000)), Math.ceil(Math.random() * 600), 15, true, this.style);
        }
        return true;
    }
}

// import DataFn,{ObjectData,CalcData} from "../../components/text/DataFn.js";
class AddTextTemplates {
    constructor(comps) {
        this.addToArray = comps;
    }
    // allVisible(content :string="",textColor:string="yellow",msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50):Text{
    //     let g = new Text(content,x,y,msStart,msEnd);
    //     g.d.fontColor = textColor;
    //     //----very imp
    //     this.addToArray.push(g);
    //     g.d.content = content;
    //     g.d.x = x;
    //     g.d.y = y;
    //     //---------set all flags true    
    //     g.d.flagDrawBorder = true;
    //     g.d.flagDrawContentArea = true;
    //     g.d.flagDrawMargin = true;
    //     g.d.flagDrawPadding = true;
    //     g.d.flagDrawText = true;
    //     //---------set colors
    //     g.d.colorMargin = "red";
    //     g.d.colorBorder = "green";
    //     g.d.colorPadding = "blue";
    //     g.d.colorContentBg = "black";
    //     // g.d.fontColor = "yellow";
    //     //---widen all
    //     g.d.widthBorder = 10;
    //     g.d.widthMargin = 10;
    //     g.d.widthPadding = 10;
    //     return g;
    // }
    txt(content = "", textColor = "black", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        let g = new Text();
        g.d.fontColor = textColor;
        //----very imp
        this.addToArray.push(g);
        g.d.content = content;
        g.d.x = x;
        g.d.y = y;
        //---------set all flags true    
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = false;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = false;
        g.d.flagDrawText = true; // keep it true
        //..
        // g.d.fontColor = textColor;
        g.d.fontFamily = FontNames.Helvetica;
        return g;
    }
    txtBg(content = "", textColor = "black", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        let g = new Text();
        g.d.fontColor = textColor;
        //----very imp
        this.addToArray.push(g);
        g.d.content = content;
        g.d.x = x;
        g.d.y = y;
        //---------set all flags true    
        g.d.flagDrawBorder = false;
        g.d.flagDrawContentArea = true;
        g.d.flagDrawMargin = false;
        g.d.flagDrawPadding = true;
        g.d.flagDrawText = true; // keep it true
        //...
        // g.d.widthPadding = padding;
        // g.d.colorContentBg = colorBg; 
        // g.d.colorPadding = colorBg; 
        // g.d.fontColor = textColor;
        g.d.fontFamily = FontNames.Helvetica;
        return g;
    }
}

//--components
class AddFacade {
    constructor(comps) {
        this.addToArray = comps;
        this.textTempl = new AddTextTemplates(comps);
    }
    //(DataFn :()=>T,msStart=0,msEnd= Number.MAX_SAFE_INTEGER)
    text(content = "text", fontColor = "black", msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        // let bs = new Text();
        let bs = new Text(content, fontColor, msStart, msEnd, x, y);
        this.addToArray.push(bs);
        return bs;
    }
    grid(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        let g = new Grid(msStart, msEnd);
        this.addToArray.push(g);
        return g;
    }
    frameCounter(x = 100, y = 100, msEnd = Number.MAX_SAFE_INTEGER) {
        let item = new FrameCounter();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
    }
    circle(x = 100, y = 100) {
        let item = new Circle();
        item.d.x = x;
        item.d.y = y;
        this.addToArray.push(item);
    }
    randomBgShapes() {
        let item = new RandomBgShapes();
        this.addToArray.push(item);
    }
}

class CompActions {
    constructor(arr, p) {
        this.arr = arr;
        this.p = p;
    }
    chqCollision(x, y) {
        // for (let i = 0; i < this.arr.length; i++) {
        //     const elm = this.arr[i];
        //     // if (x > elm.d.x && x < elm.width(this.p)){
        //     if (x > elm.d.x && x < (elm.d.x + 200) ){
        //         // if (y > elm.draw.y && y < elm.height(this.p)){
        //         if (y > elm.d.y && y < (elm.d.y + 200) ){
        //             return elm;
        //         }
        //     }
        // }
        return null;
    }
} //comps end

class Bilzaa2d {
    //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    constructor(canvasId = "bilzaa2d", canvasWidth = 800, canvasHeight = 350, timeEnd = Number.MAX_SAFE_INTEGER) {
        this.canvasId = canvasId;
        this.comps = [];
        this.background = new Background();
        this.timeStart = null;
        this.timeEnd = timeEnd;
        // this.canvasWidth = canvasWidth;//result into full screen
        // this.canvasHeight = canvasHeight; //result into full screen
        this.interval = 0;
        // this.frame = 0; 
        this.msPerFrame = 1000;
        // this.setCanvas(canvasWidth,canvasHeight);
        this.pack = new Pack(canvasWidth, canvasHeight, this.canvasId);
        this.add = new AddFacade(this.comps);
        this.compActions = new CompActions(this.comps, this.pack);
    }
    setCanvas(width = 800, height = 400) {
        this.pack = new Pack(width, height, this.canvasId);
    }
    getCanvasHeight() {
        return this.pack.canvasHeight;
    }
    getCanvasWidth() {
        return this.pack.canvasWidth;
    }
    draw() {
        if (this.pack == null) {
            throw new Error("bilzaa is not initialized");
        }
        // this.frame += 1; /// use later if req internally
        let msDelta = this.getMsDelta();
        //stop if completed
        if (msDelta >= this.timeEnd) {
            this.stop();
        }
        this.pack.clearCanvas();
        this.pack.drawBackground(this.background.color); //fornow         
        this.drawByDrawLayer(msDelta, DrawLayer.BackGround);
        this.drawByDrawLayer(msDelta, DrawLayer.ForeGround);
        this.drawByDrawLayer(msDelta, DrawLayer.MiddleGround);
        return true;
    }
    drawByDrawLayer(msDelta, drawLayer) {
        for (let i = 0; i < this.comps.length; i++) {
            let comp = this.comps[i];
            //--save ctx
            if (comp.drawLayer == drawLayer) {
                if (comp.getStart() < msDelta && comp.getEnd() > msDelta) {
                    this.pack.save();
                    comp.update(msDelta, this.pack);
                    comp.draw(this.pack); //waoooo no msDelta
                    this.pack.restore();
                }
            }
        }
        return true;
    }
    chqCollision(x, y) {
        return this.compActions.chqCollision(x, y);
    }
    insert(comp) {
        this.comps.push(comp);
        return comp;
    }
    getMsDelta() {
        if (this.timeStart == null) {
            return 0;
        }
        else {
            let curTime = new Date().getTime();
            return curTime - this.timeStart;
        }
    }
    start() {
        if (this.timeStart !== null) {
            return false;
        }
        else {
            this.stop();
            this.timeStart = new Date().getTime();
            this.interval = setInterval(() => {
                this.draw();
            }, this.msPerFrame);
            return true;
        }
    }
    stop() {
        // console.log("stopped");
        this.timeStart = null;
        clearInterval(this.interval);
    }
} //ends

var XAlignment;
(function (XAlignment) {
    XAlignment["Left"] = "LEFT";
    XAlignment["Right"] = "RIGHT";
    XAlignment["Mid"] = "MID";
    XAlignment["Off"] = "OFF";
})(XAlignment || (XAlignment = {}));
var YAlignment;
(function (YAlignment) {
    YAlignment["Top"] = "TOP";
    YAlignment["Mid"] = "MID";
    YAlignment["Bottom"] = "BOTTOM";
    YAlignment["Off"] = "OFF";
})(YAlignment || (YAlignment = {}));

class Position {
    constructor(x = 0, y = 0) {
        this.xAlignment = XAlignment.Left;
        this.yAlignment = YAlignment.Top;
        this.x = x;
        this.y = y;
    }
}

var DrawLayer;
(function (DrawLayer) {
    DrawLayer["BackGround"] = "BACKGROUND";
    DrawLayer["MiddleGround"] = "MIDDLEGROUND";
    DrawLayer["ForeGround"] = "FOREGROUND";
})(DrawLayer || (DrawLayer = {}));

class Transition {
    constructor(newDataObjFn) {
        //this is the fn that will gen the data    
        this.newDataObjFn = newDataObjFn;
        //the current data
        this.data = this.newDataObjFn();
        // the transisiotns
        this.transitions = [];
    }
    /** Why is there an error ?
     * ans: since i am making this for transition array which will have only some of the elms and not all rest are marked as null, so that both the arrays merge.
     * Better Ans: this array should have just those items which have been used and not a long list of nulls, this is a design error.
     */
    add(frameStart) {
        //--gen new obj
        let f = this.newDataObjFn();
        //--mark all properties as null
        for (const key in f) {
            //@ts-expect-error
            f[key] = null;
        }
        f.frameStart = frameStart; //must
        this.transitions.push(f); // here it is added to the array
        return f;
    }
    insert(f) {
        this.transitions.push(f);
        return f;
    }
    /**Keep in mind that when we apply some frame all the frames before that are deleted, since they have elapsed */
    apply(frame) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const trs = this.transitions[i];
            if (trs.frameStart <= frame) {
                this.merge(trs); //merge
                this.transitions.splice(i, 1); //delete
            }
        }
    }
    //---when is this used
    merge(subset) {
        for (const key in this.data) {
            if (subset.hasOwnProperty(key)) {
                // @ts-expect-error
                if (subset[key] !== null) {
                    // @ts-expect-error
                    this.data[key] = subset[key];
                }
            }
        }
        return true;
    }
}
////---------------

export { Bilzaa2d, Component, DrawLayer, FontNames, Pack, Position, Style, Transition };
