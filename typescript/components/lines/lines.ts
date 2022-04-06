import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";

import Vertex from "./Vertex.js";

export default class Lines extends Component<ObjectData>{

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
p.commitCtxData(this.style);
p.ctx.beginPath(); 
//--seperate moveTo a and y from vertices
p.ctx.moveTo(p.xPerc(this.moveTo.x),p.yPerc(this.moveTo.y));

    for (let i = 0; i < this.vertices.length; i++) {
        const pos = this.vertices[i];
        p.ctx.lineTo(p.xPerc(pos.x),p.yPerc(pos.y));
    }
    //--do not draw the last line
    p.ctx.closePath(); //importantay
        if (this.d.fill == true){
            p.ctx.fill();
            // p.ctx.stroke();
        }else {
            p.ctx.stroke();
        }
 return true;   
}

add(x :number=0,y:number=0){
let v = new Vertex(x,y); 
this.vertices.push(v);
}
//very simple function just do not put abstractions here-- keep it simple and pure 

}