import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
export default class RandomBgShapes extends Component<ObjectData> {

constructor (){
    super(DataFn);
    this.drawLayer = DrawLayer.BackGround;
}
width(p:Pack):number {
    return 0;
}
height(p:Pack):number {
    return 0;
}

draw(p:Pack):boolean{
    this.style.fillStyle = "#f2edba";
    this.style.strokeStyle = "#efeee3";
    for (let i = 0; i < this.d.count ; i++) {
        p.drawCircle((Math.ceil(Math.random()* 1000)),Math.ceil(Math.random()* 600),15,true,this.style);
    }
return true;
}

}