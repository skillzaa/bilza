export default class Transition {
    constructor(newDataObjFn) {
        this.newDataObjFn = newDataObjFn;
        this.data = this.newDataObjFn();
        this.transitions = [];
    }
    add(msStart) {
        let f = this.newDataObjFn();
        for (const key in f) {
            f[key] = null;
        }
        f.msStart = msStart;
        this.transitions.push(f);
        return f;
    }
    insert(f) {
        this.transitions.push(f);
        return f;
    }
    apply(msDelta) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const trs = this.transitions[i];
            if (trs.msStart <= msDelta) {
                this.merge(trs);
                this.transitions.splice(i, 1);
            }
        }
    }
    merge(subset) {
        for (const key in this.data) {
            if (subset.hasOwnProperty(key)) {
                if (subset[key] !== null) {
                    this.data[key] = subset[key];
                }
            }
        }
        return true;
    }
}
