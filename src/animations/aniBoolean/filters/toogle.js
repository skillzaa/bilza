import BaseFilter from "../../animationDesign/baseFilter.js";
export default class Toogle extends BaseFilter {
    constructor(startTimeSec, endTimeSec, skipXFrames = 0) {
        super(startTimeSec, endTimeSec, skipXFrames);
    }
    value() {
        this._ret_val = !this._ret_val;
        console.log("toogle::  value", this._ret_val);
        return this._ret_val;
    }
}
