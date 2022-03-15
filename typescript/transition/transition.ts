import IFrameStart from "./IFrameStart.js";

export default class Transition <T extends IFrameStart>{

private newDataObjFn :() => T;
data:T;
private transitions:T[];

constructor(newDataObjFn :()=> T){
//this is the fn that will gen the data    
this.newDataObjFn = newDataObjFn;    
//the current data
this.data = this.newDataObjFn();    
// the transisiotns
this.transitions = [];
}

add(frameStart :number):T{
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
insert(f:T):T{
    this.transitions.push(f);
    return f;
}
/**Keep in mind that when we apply some frame all the frames before that are deleted, since they have elapsed */
apply(frame :number){
for (let i = this.transitions.length -1; i >= 0; i--) {
    const trs = this.transitions[i];
    if(trs.frameStart <= frame ){
        this.merge(trs); //merge
        this.transitions.splice(i,1); //delete
    }
}
}

private merge(subset:IFrameStart):boolean{
    for (const key in this.data) {
        if (subset.hasOwnProperty(key)){
// @ts-expect-error
            if (subset[key] !== null){
// @ts-expect-error
                this.data[key] = subset[key]
            }
        }
    }
    return true;
}
}
////---------------