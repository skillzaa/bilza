export default class Comps {
    constructor(pack) {
        this.pack = pack;
        this.compsArray = [];
    }
    init() {
        for (let i = 0; i < this.compsArray.length; i++) {
            this.compsArray[i].init(this.pack);
        }
        return true;
    }
    resizeAll(width = 800, height = 400) {
        for (let i = 0; i < this.compsArray.length; i++) {
            const element = this.compsArray[i];
            element.resize(width, height);
        }
        return true;
    }
}
