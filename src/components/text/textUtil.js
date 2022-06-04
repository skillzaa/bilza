export default class TextUtil {
    constructor() { }
    static contentWidth(p, content, maxDisplayChars, fontSize, fontFamily) {
        return p.charsWidth(content.substring(0, maxDisplayChars), fontSize, fontFamily);
    }
    static realWidth(p, content, maxDisplayChars, fontSize, fontFamily, paddingLeft, paddingRight) {
        const textWdith = p.charsWidth(content.substring(0, maxDisplayChars), fontSize, fontFamily);
        return textWdith + (paddingLeft + paddingRight);
    }
    static realHeight(p, fontSize, fontFamily, paddingTop, paddingBottom) {
        const textHeight = p.charsWidth("W", fontSize, fontFamily);
        return textHeight + (paddingTop + paddingBottom);
    }
    static drawBorder(p, style, x, y, borderWidth, width, height) {
        if (borderWidth <= 0) {
            return false;
        }
        style.lineWidth = borderWidth;
        p.drawRect(x - Math.ceil(borderWidth / 2), y - Math.ceil(borderWidth / 2), width + (borderWidth), height + (borderWidth), style);
        return true;
    }
    static drawBg(p, style, x, y, width, height) {
        p.drawFillRect(x, y, width, height, style);
        return true;
    }
    static drawContent(p, style, content, x, y, maxDisplayChars, paddingLeft, paddingTop, showContent) {
        if (showContent == false) {
            return false;
        }
        p.drawText(content.substring(0, maxDisplayChars), x + paddingLeft, y + paddingTop, style);
    }
}
