export default class Transition {
    constructor(newDataObjFn) {
        this.newDataObjFn = newDataObjFn;
        this.data = this.newDataObjFn();
        this.transitions = [];
    }
    add(frameStart) {
        let f = this.newDataObjFn();
        for (const key in f) {
            //@ts-expect-error
            f[key] = null;
        }
        f.frameStart = frameStart; //must
        this.transitions.push(f);
        return f;
    }
    insert(f) {
        this.transitions.push(f);
        return f;
    }
    /**Keep in mind that when we apply some frame all the frames before that are deleted, since they have elapsed */
    apply(frame) {
        for (let i = this.transitions.length - 1; i >= 0; i--) {
            const trctxData = this.transitions[i];
            if (trctxData.frameStart <= frame) {
                this.merge(trctxData);
                this.transitions.splice(i, 1);
            }
        }
    }
    merge(subset) {
        for (const key in this.data) {
            if (subset.hasOwnProperty(key)) {
                //@ts-expect-error
                if (subset[key] !== null) {
                    //@ts-expect-error
                    this.data[key] = subset[key];
                }
            }
        }
        return true;
    }
}
////---------------
