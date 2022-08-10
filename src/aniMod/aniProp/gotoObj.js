export default class GotoObj {
    constructor(msDelta, value) {
        this.msDelta = msDelta;
        this.aniFilters = [];
        this.value = value;
    }
    getAnimatedValue(msDelta) {
        for (let i = 0; i < this.aniFilters.length; i++) {
            const ani = this.aniFilters[i];
            if (ani.qualifyToRun(msDelta) == false) {
                continue;
            }
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                return v;
            }
        }
        return this.value;
    }
}
