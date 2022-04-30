import ;
export function initAllItems(items, p) {
    for (let i = 0; i < items.length; i++) {
        items[i].init(p);
    }
}
export function getSmallestFontSize(items, p) {
    if (items.length == 0) {
        return 5;
    }
    let sm = items[0].d.fontSize;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.d.fontSize < sm) {
            sm = item.d.fontSize;
        }
    }
    return sm;
}
export function assignFontSizeToAll(items, incomFontSize) {
    for (let i = 0; i < items.length; i++) {
        items[i].d.fontSize = incomFontSize;
        items[i].style.fontSize = incomFontSize;
    }
}
export function applyDim(items, listDim, p) {
    for (let i = 0; i < listDim.length; i++) {
        items[listDim[i]].d.color = this.d.dimFontColor;
        items[listDim[i]].d.colorBg = this.d.dimBgColor;
        items[listDim[i]].d.colorBorder = this.d.dimBorderColor;
    }
}
