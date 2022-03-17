import {IDrawable,Pack,Component} from "../../index.js";

export default class CompActions {
arr: IDrawable[];
p :Pack;
constructor(arr: IDrawable[],p :Pack){
this.arr = arr;
this.p = p;
}
chqCollision(x :number, y :number):IDrawable | null{
for (let i = 0; i < this.arr.length; i++) {
    const elm = this.arr[i];
    // if (x > elm.d.x && x < elm.width(this.p)){
    if (x > elm.d.x && x < (elm.d.x + 200) ){
        // if (y > elm.draw.y && y < elm.height(this.p)){
        if (y > elm.d.y && y < (elm.d.y + 200) ){
            return elm;
        }
    }
}
return null;
}




}//comps end