import { Component, Style, Transition } from "../../bilzaa2d/index.js";
import ContentObject from "./contentObject.js";
import DataFn from "./DataFn.js";
export default class TextGroup extends Component {
    constructor(content) {
        super();
        this.styleText = new Style();
        this.styleUnderline = new Style();
        this.styleOverline = new Style();
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.contentObjs = this.getContentObj(content);
    }
    width(p) {
        // return p.charsWidth(this.d.content,this.styleText.fontSize, this.styleText.fontName);
        return 0;
    }
    height(p) {
        return p.charsWidth("W", this.styleText.fontSize, this.styleText.fontName);
    }
    draw(p) {
        // this.drawBackground(p);
        // this.drawBorder(p);
        // p.drawBackground("green");
        // let start  = this.d.content.indexOf("an example");
        // console.log("start",start);
        this.drawContent(p);
        // this.drawUnderline(p);
        // this.drawOverline(p);
        return true;
    }
    update(frame, p) {
        this.compData.apply(frame); //--important!!
        return true;
    }
    drawBackground(p) {
        // if (this.d.showBackground == true){
        //     this.styleBackground.fillStyle = this.d.backgroundColor;
        //     p.drawFillRect(
        //         p.xPerc(this.d.x),
        //         p.yPerc(this.d.y),
        //         this.width(p),this.height(p),this.styleBackground);
        // }
    }
    drawBorder(p) {
        // if (this.d.showBorder == true){
        //     this.styleBorder.fillStyle = this.d.borderColor;
        //     this.styleBorder.lineWidth = this.d.borderWidth;
        //     p.drawRect(
        //         p.xPerc(this.d.x),
        //         p.yPerc(this.d.y),
        //         this.width(p),this.height(p),this.styleBorder);
        // }
    }
    drawUnderline(p) {
        if (this.d.underline == true) {
            this.styleUnderline.fillStyle = this.d.underlineColor;
            this.styleUnderline.strokeStyle = this.d.underlineColor;
            this.styleUnderline.lineWidth = this.d.underlineWidth;
            p.drawLine(p.xPerc(this.d.x), p.yPerc(this.d.y) + this.height(p), p.xPerc(this.d.x) + this.width(p), p.yPerc(this.d.y) + this.height(p), this.styleUnderline);
        }
    }
    drawOverline(p) {
        if (this.d.overline == true) {
            this.styleUnderline.fillStyle = this.d.underlineColor;
            this.styleUnderline.strokeStyle = this.d.underlineColor;
            this.styleUnderline.lineWidth = this.d.underlineWidth;
            p.drawLine(p.xPerc(this.d.x), p.yPerc(this.d.y), p.xPerc(this.d.x) + this.width(p), p.yPerc(this.d.y), this.styleUnderline);
        }
    }
    drawContent(p) {
        let x = p.xPerc(this.d.x);
        let y = p.yPerc(this.d.y);
        for (let i = 0; i < this.contentObjs.length; i++) {
            const elm = this.contentObjs[i];
            this.styleText.fillStyle = elm.fontColor;
            this.styleText.strokeStyle = elm.fontColor;
            this.styleText.fontSize = elm.fontSize;
            // this.styleText.fontName = this.d.fontName;
            p.drawText(elm.content, x, y, this.styleText);
            x += (p.charsWidth(elm.content, elm.fontSize, elm.fontName) + this.d.gapBwWords);
        }
    }
    getContentObj(content) {
        let r = [];
        let words = content.split(" ");
        for (let i = 0; i < words.length; i++) {
            const item = words[i];
            let o = new ContentObject();
            o.fontSize = 100;
            o.fontColor = "red";
            // o.fontName = "serif";
            o.content = item;
            r.push(o);
        }
        // console.log("word",r);
        return r;
    }
    setFontColor(lookfor, color = "blue") {
        for (let i = 0; i < this.contentObjs.length; i++) {
            let elm = this.contentObjs[i];
            if (elm.content == lookfor) {
                elm.fontColor = color;
            }
        }
    }
    setFontSize(lookfor, fontSize = 26) {
        for (let i = 0; i < this.contentObjs.length; i++) {
            let elm = this.contentObjs[i];
            if (elm.content == lookfor) {
                elm.fontSize = fontSize;
            }
        }
    }
}
