




export default class Vertex {

public readonly x:number;
public readonly y:number;
public readonly command: "lineTo" | "moveTo" | "fill";
constructor(x :number, y :number){
this.x = x;
this.y = y;
this.command = "lineTo";
}



}