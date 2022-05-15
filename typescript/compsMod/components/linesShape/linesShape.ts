import {Pack } from "../../../Bilza.js";
//--get Component directly
import Component from "../../BaseComponent/Basecomponent.js";

import DataFn,{ObjectData} from "./DataFn.js";

import Vertex from "./Vertex.js";

export default class LinesShape extends Component<ObjectData>{
 
private    vertices:Vertex[];
private    moveTo:Vertex;

constructor(x :number=0,y:number=0){
    super(DataFn);
this.moveTo = new Vertex(x,y);  
this.vertices = [];   
}

draw(p: Pack): boolean {
if (this.vertices.length < 2) {console.warn("Lines component needs atleast 3 pair of vertices");
return false;}    
// p.commitCtxData(this.style);
p.beginPath(); 
//--seperate moveTo x and y from vertices
    p.moveTo(p.xPerc(this.moveTo.x),p.yPerc(this.moveTo.y));

    for (let i = 0; i < this.vertices.length; i++) {
        const pos = this.vertices[i];
        p.lineTo(p.xPerc(pos.x),p.yPerc(pos.y),this.style);
    }
    //--do not draw the last line
    p.closePath(); //importantay
        if (this.d.flagFilled == true){
            p.fill(this.style);
        }else {
            p.stroke();
        }
 return true;   
}

add(x :number=0,y:number=0){
let v = new Vertex(x,y); 
this.vertices.push(v);
}
//very simple function just do not put abstractions here-- keep it simple and pure 
 
}