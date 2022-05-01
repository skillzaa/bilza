export default class ListUtil {
    constructor(d) {
        this.d = d;
    }
    initAllItems(p) {
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].init(p);
        }
    }
    getSmallestFontSize(p) {
        if (this.d.items.length == 0) {
            return 5;
        }
        let sm = this.d.items[0].d.fontSize;
        for (let i = 0; i < this.d.items.length; i++) {
            const item = this.d.items[i];
            if (item.d.fontSize < sm) {
                sm = item.d.fontSize;
            }
        }
        return sm;
    }
    assignFontSizeToAll(incomFontSize) {
        for (let i = 0; i < this.d.items.length; i++) {
            this.d.items[i].d.fontSize = incomFontSize;
            this.d.items[i].style.fontSize = incomFontSize;
        }
    }
    applyDim(p) {
        for (let i = 0; i < this.d.dimList.length; i++) {
            this.d.items[this.d.dimList[i]].d.color = this.d.dimFontColor;
            this.d.items[this.d.dimList[i]].d.colorBg = this.d.dimBgColor;
            this.d.items[this.d.dimList[i]].d.colorBorder = this.d.dimBorderColor;
        }
    }
    applyHighlight(p) {
        for (let i = 0; i < this.d.highlightList.length; i++) {
            this.d.items[this.d.highlightList[i]].d.color = this.d.highlightFontColor;
            this.d.items[this.d.highlightList[i]].d.colorBg = this.d.highlightBgColor;
            this.d.items[this.d.highlightList[i]].d.colorBorder = this.d.highlightBorderColor;
        }
    }
}
