import { Component } from "../Bilza.js";
import DataFn from "./DataFn.js";
export default class Rect extends Component {
    constructor(duration = 300) {
        super(DataFn, duration);
    }
    width(p) {
        return 10;
    }
    height(p) {
        return 10;
    }
    draw(p) {
        console.log("Test Comp");
        return true;
    }
}
