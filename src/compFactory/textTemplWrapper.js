import TextTemplates from "../components/text/textTemplates.js";
export default class TextTemplWrapper {
    constructor(insert) {
        this.insert = insert;
        this.tt = new TextTemplates();
    }
    h1(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", colorHax = "#000000") {
        let txt = this.tt.h1(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    jt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "JUMBO TRON", colorHax = "#008000") {
        let txt = this.tt.jt(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    lb(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.lb(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    lm(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.lm(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    lt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.lt(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    mt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.mt(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    mm(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.mm(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    mb(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.mb(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    rb(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.rb(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    rm(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.rm(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    rt(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "Left Bottom", colorHax = "#008000") {
        let txt = this.tt.rt(startTimeSeconds, endTimeSeconds, content, colorHax);
        this.insert(txt);
        return txt;
    }
    bulletPointMid(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "bulletPointMid", colorHax = "#008000", y = 50) {
        let txt = this.tt.bulletPointMid(startTimeSeconds, endTimeSeconds, content, colorHax, y);
        this.insert(txt);
        return txt;
    }
}
