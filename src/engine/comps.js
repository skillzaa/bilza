export default class Comps {
    constructor() {
        this.compArray = [];
    }
    push(comp) {
        this.compArray.push(comp);
        return comp;
    }
    initAll(pack) {
        for (let i = 0; i < this.compArray.length; i++) {
            this.compArray[i].init(pack);
        }
        return true;
    }
}
