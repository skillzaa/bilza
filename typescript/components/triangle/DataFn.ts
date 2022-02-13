import {Position,Style} from "../../bilzaa2d/index.js";
    export class TriangleData {
    frameStart:number;

    a :Position;
    b :Position;
    c :Position;
    
    lineColorAB :string ;
    lineColorBC :string ;
    lineColorCA :string ;
    lineWidthAB :number ;
    lineWidthBC :number ;
    lineWidthCA :number ;
    vertexMarkerAColor :string ;
    vertexMarkerBColor :string ;
    vertexMarkerCColor :string ;
    // vertexMarkerAWidth :number ;
    // vertexMarkerBWidth :number ;
    // vertexMarkerCWidth :number ;

    showVertexMarker:boolean;
    fill:boolean;
    fillColor:string;

    constructor(){
    this.frameStart = 0;
    this.a = new Position(200,500);
    this.b = new Position(500,500);
    this.c = new Position(200,100);

    this.lineColorAB = "red" ;
    this.lineColorBC = "green" ;
    this.lineColorCA = "blue" ;

    this.lineWidthAB = 3;
    this.lineWidthBC = 3;
    this.lineWidthCA = 3;

    this.vertexMarkerAColor = "yellow";
    this.vertexMarkerBColor = "crimson" ;
    this.vertexMarkerCColor = "orange";

    // this.vertexMarkerAWidth = 1;
    // this.vertexMarkerBWidth = 2;
    // this.vertexMarkerCWidth = 3;

    this.showVertexMarker = true;
    this.fill = true;
    this.fillColor = "blue";
    }
};


export default function DataFn ():TriangleData  {
let td = new TriangleData();
return td;
}