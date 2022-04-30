export default function initAllItems(items, p) {
    for (let i = 0; i < items.length; i++) {
        items[i].init(p);
    }
}
