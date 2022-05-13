import {Component,Pack,DrawLayer } from "../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
 
export default class Rect extends Component<ObjectData> {

constructor (duration:number=300){
    super(DataFn,duration);
}
width(p:Pack):number {
return  10;    
}
height(p:Pack):number {
    return  10;
}

draw(p:Pack):boolean{
console.log("Test Comp");
return true;
}


}