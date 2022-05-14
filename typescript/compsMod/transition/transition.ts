import IMsStart from "../../design/IMsStart.js";

export default class Transition <T extends IMsStart>{

private newDataObjFn :()=>T;
data:T;
private transitions:T[];

constructor(newDataObjFn :()=>T){
//this is the fn that will gen the data    
this.newDataObjFn = newDataObjFn;    
//the current data
this.data = this.newDataObjFn();    
// the transisiotns
this.transitions = [];
}

/** Why is there an error ?
 * Ans: since i am making this for transition array which will have only some of the elms and not all rest are marked as null, so that both the arrays merge.
 * Better Ans: this array should have just those items which have been used and not a long list of nulls, this is a design error.
 */
add(msStart :number):T{
    //--gen new obj
    let f = this.newDataObjFn();
    //--mark all properties as null
    for (const key in f) {
        //@ts-expect-error
        f[key] = null;
    }
    f.msStart = msStart; //must
    this.transitions.push(f); // here it is added to the array
    return f;
}
insert(f:T):T{
    this.transitions.push(f);
    return f;
}
/**Keep in mind that when we apply some frame all the frames before that are deleted, since they have elapsed */
apply(msDelta :number){
for (let i = this.transitions.length -1; i >= 0; i--) {
    const trs = this.transitions[i];
    if(trs.msStart <= msDelta ){
        this.merge(trs); //merge
        this.transitions.splice(i,1); //delete
    }
}
}
//---In the this.apply we merge the object
private merge(subset:IMsStart):boolean{
    for (const key in this.data) {  //====> Note this.data
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