export default class Transition {
    constructor(newDataObjFn) {
        //this is the fn that will gen the data    
        this.newDataObjFn = newDataObjFn;
        //the current data
        this.data = this.newDataObjFn();
        // the transisiotns
        this.transitions = [];
    }
    add(frameStart) {
        //--gen new obj
        let f = this.newDataObjFn();
        //--mark all properties as null
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
            const trs = this.transitions[i];
            if (trs.frameStart <= frame) {
                this.merge(trs); //merge
                this.transitions.splice(i, 1); //delete
            }
        }
    }
    merge(subset) {
        for (const key in this.data) {
            if (subset.hasOwnProperty(key)) {
                // @ts-expect-error
                if (subset[key] !== null) {
                    // @ts-expect-error
                    this.data[key] = subset[key];
                }
            }
        }
        return true;
    }
}
////---------------
