// import AnimationEntry from "./animationEntry.js";
import IFilter from "./IFilter.js";
import Adder from "./adder.js";
import Increment from "./increment.js";

export default class AniNumber{

private animations :IFilter[];
private val :number;
private readonly INITALVALUE :number;

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(initalValue :number){
this.INITALVALUE = initalValue; 
this.val = initalValue; 
this.animations = []; 
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
update(msDelta :number){
if (this.animations.length < 1) {
    this.val = this.INITALVALUE; 
}

for (let i = 0; i < this.animations.length; i++) {
        const ani = this.animations[i];
        ani.update(msDelta);
        this.val = ani.value();
}    
    
}
value(){
return this.val;
}

public increment(){
    let a = new Increment(0,40,0,600);
// let ae = new AnimationEntry(a,1,10);
this.animations.push(a);
}

} 