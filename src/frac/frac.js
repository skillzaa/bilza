import LineSeg from "../lineSeg/lineSeg.js";
export default class Frac {
    constructor(state) {
        this.state = state;
        this.top = new LineSeg(this.state);
        this.bot = new LineSeg(this.state);
        this.divider_gap = 2;
    }
    draw(x, y) {
        this.state.drawText(String.fromCodePoint(8730), 50, y, 260);
        x += this.state.chars_width(String.fromCodePoint(8730), 260);
        console.log("this.state.chars_width(String.fromCodePoint(8730),260)", this.state.chars_width(String.fromCodePoint(8730), 260));
        if (this.top.width() > this.bot.width()) {
            this.top.draw(x, y);
            this.state.draw_line(x, y + this.top.height(), x + this.top.width(), y + this.top.height());
            let botX = (x + this.top.width() / 2) - (this.bot.width() / 2);
            this.bot.draw(botX, y + this.top.height() + 8);
        }
        else {
            this.top.draw(((x + this.bot.width() / 2) - (this.top.width() / 2)), y);
            this.bot.draw(x, y + this.top.height());
            this.state.draw_line(x, y + (this.top.height() - 7), x + this.bot.width() + 5, y + (this.top.height() - 7));
        }
        return true;
    }
    width() {
        if (this.top.width() > this.bot.width()) {
            return Math.ceil(this.top.width());
        }
        else {
            return Math.ceil(this.bot.width());
        }
    }
    height() {
        return (Math.ceil(this.top.height()) +
            Math.ceil(this.bot.height()) +
            this.divider_gap);
    }
}
