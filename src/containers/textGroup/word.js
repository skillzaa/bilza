import { Component } from "../../bilzaa2d/index.js";
export default class Word extends Component {
    constructor() {
        this.content = "";
        this.fontColor = "blue";
        this.fontSize = 22;
        this.fontFamily = "serif";
        this.underline = false;
        this.underlineExtend = false;
        this.underlineColor = "black";
        this.overline = false;
        this.overlineExtend = false;
        this.overlineColor = "black";
        this.highlight = false;
        this.highlightExtend = false;
        this.highlightColor = "yellow";
    }
}
